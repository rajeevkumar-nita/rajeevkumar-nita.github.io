
import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../utils/aiService'; // Ensure this path is correct
import { getSystemPrompt } from '../utils/portfolioData'; // Importing the new data
import { MessageCircle, X, Send, Sparkles, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

// Browser Web Speech API support (no dependencies / no API cost)
const SpeechRecognitionAPI =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;
const TTS_SUPPORTED = typeof window !== 'undefined' && 'speechSynthesis' in window;

// Strip markdown so it is read aloud cleanly
const stripMarkdown = (text) =>
  text.replace(/\*\*/g, '').replace(/[#`>_]/g, '').replace(/^\s*[-*]\s+/gm, '');

// Normalize text for a lightweight echo check (drop AI voice heard by the mic)
const normalizeText = (s) =>
  s.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

// Barge-in tuning: mic loudness (RMS) + consecutive frames required to confirm
// the user is talking over the assistant. echoCancellation removes the AI audio,
// so the analyser mostly hears the real speaker.
const BARGE_IN_RMS = 0.045;
const BARGE_IN_FRAMES = 5;

// One-tap questions to help recruiters get key info instantly
const SUGGESTIONS = [
  "Why should I hire Rajeev?",
  "What's his tech stack?",
  "Tell me about his experience",
  "Show his top projects",
  "How can I contact him?",
];

// Renders simple markdown (**bold** and "- " bullets) from the AI reply
const renderInline = (text) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );

const MessageContent = ({ text }) => {
  const lines = text.split("\n").filter((l) => l.trim() !== "");
  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (/^[-*]\s+/.test(trimmed)) {
          return (
            <div key={i} className="flex gap-1.5">
              <span className="text-sky-500 shrink-0">•</span>
              <span>{renderInline(trimmed.replace(/^[-*]\s+/, ""))}</span>
            </div>
          );
        }
        return <p key={i}>{renderInline(trimmed)}</p>;
      })}
    </div>
  );
};

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I'm Rajeev's AI assistant 👋 Ask me about his experience, skills, projects, or how to get in touch.", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  // Two-way voice conversation mode (ChatGPT-style hands-free chat)
  const [voiceMode, setVoiceMode] = useState(false);
  const [voiceState, setVoiceState] = useState("idle"); // idle | listening | processing | speaking

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);
  const restartTimerRef = useRef(null);
  const voiceEnabledRef = useRef(false);
  const voiceModeRef = useRef(false);
  const voiceStateRef = useRef("idle");
  const handleSendRef = useRef(null);
  const startListeningRef = useRef(null);
  // Barge-in / echo-cancellation audio pipeline
  const mediaStreamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const vadRafRef = useRef(null);
  const lastSpokenRef = useRef("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Keep refs in sync so async voice callbacks always read the latest values
  useEffect(() => { voiceEnabledRef.current = voiceEnabled; }, [voiceEnabled]);
  useEffect(() => { voiceModeRef.current = voiceMode; }, [voiceMode]);
  useEffect(() => { voiceStateRef.current = voiceState; }, [voiceState]);

  // --- Speech recognition (speech -> text) -----------------------------
  const startListening = () => {
    if (!SpeechRecognitionAPI || !voiceModeRef.current) return;
    clearTimeout(restartTimerRef.current);
    // Never open the mic while the assistant is talking (avoids echo capture)
    if (TTS_SUPPORTED && window.speechSynthesis.speaking) return;
    try { recognitionRef.current?.abort?.(); } catch { /* not started */ }

    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    let resolved = false; // guards against duplicate results / stray restarts

    recognition.onresult = (event) => {
      resolved = true;
      const transcript = event.results[0][0].transcript?.trim();
      if (!transcript) return;
      // Safety net: ignore text that is really the AI's own voice echoed back
      const spoken = normalizeText(lastSpokenRef.current);
      const heard = normalizeText(transcript);
      if (heard && spoken && heard.split(" ").length >= 3 && spoken.includes(heard)) {
        if (voiceModeRef.current) startListeningRef.current?.();
        return;
      }
      setVoiceState("processing");
      handleSendRef.current?.(transcript, { fromVoice: true });
    };
    recognition.onerror = (event) => {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        resolved = true;
        stopVoiceMode();
        setMessages((prev) => [
          ...prev,
          { text: "I need microphone access for voice chat. Please allow it in your browser and tap the mic again.", isBot: true },
        ]);
      }
    };
    recognition.onend = () => {
      // Silence timeout with no captured speech -> keep the conversation open
      // by restarting the mic (throttled so we never spin in a tight loop).
      if (voiceModeRef.current && !resolved && voiceStateRef.current === "listening") {
        restartTimerRef.current = setTimeout(() => startListeningRef.current?.(), 350);
      }
    };

    recognitionRef.current = recognition;
    setVoiceState("listening");
    try { recognition.start(); } catch { /* start() throws if already running */ }
  };
  startListeningRef.current = startListening;

  // --- Speech synthesis (text -> speech) -------------------------------
  const speak = (text) => {
    const shouldSpeak = voiceModeRef.current || voiceEnabledRef.current;
    if (!TTS_SUPPORTED || !shouldSpeak) {
      if (voiceModeRef.current) startListening(); // no TTS -> just keep listening
      return;
    }
    window.speechSynthesis.cancel();
    lastSpokenRef.current = stripMarkdown(text); // remember it to filter echo
    const utterance = new SpeechSynthesisUtterance(stripMarkdown(text));
    utterance.lang = "en-US";
    utterance.rate = 1;
    utteranceRef.current = utterance;
    if (voiceModeRef.current) setVoiceState("speaking");

    const done = () => {
      if (utteranceRef.current === utterance) utteranceRef.current = null;
      if (voiceModeRef.current) startListening(); // resume the conversation
      else setVoiceState("idle");
    };
    utterance.onend = done;
    utterance.onerror = done;
    window.speechSynthesis.speak(utterance);
  };

  // Barge-in: stop the assistant mid-sentence and listen to the user again
  const interruptSpeaking = () => {
    if (utteranceRef.current) utteranceRef.current.onend = null;
    utteranceRef.current = null;
    if (TTS_SUPPORTED) window.speechSynthesis.cancel();
    clearTimeout(restartTimerRef.current);
    // small delay lets speechSynthesis fully release before re-opening the mic
    restartTimerRef.current = setTimeout(() => startListeningRef.current?.(), 150);
  };

  // --- Hands-free barge-in detection ----------------------------------
  // While the assistant speaks, watch the echo-cancelled mic input. A sustained
  // loudness spike means the user started talking -> interrupt automatically.
  const setupVad = (stream) => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    try {
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;
      ctx.resume?.();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      analyserRef.current = analyser;
      const buffer = new Uint8Array(analyser.fftSize);
      let loudFrames = 0;

      const tick = () => {
        if (!analyserRef.current) return; // torn down
        if (voiceStateRef.current === "speaking") {
          analyser.getByteTimeDomainData(buffer);
          let sum = 0;
          for (let i = 0; i < buffer.length; i++) {
            const v = (buffer[i] - 128) / 128;
            sum += v * v;
          }
          const rms = Math.sqrt(sum / buffer.length);
          if (rms > BARGE_IN_RMS) {
            loudFrames += 1;
            if (loudFrames >= BARGE_IN_FRAMES) {
              loudFrames = 0;
              interruptSpeaking(); // user talked over the AI -> hand them the mic
            }
          } else {
            loudFrames = 0;
          }
        } else {
          loudFrames = 0;
        }
        vadRafRef.current = requestAnimationFrame(tick);
      };
      vadRafRef.current = requestAnimationFrame(tick);
    } catch { /* barge-in is optional; voice mode still works via the button */ }
  };

  const teardownAudio = () => {
    if (vadRafRef.current) cancelAnimationFrame(vadRafRef.current);
    vadRafRef.current = null;
    try { analyserRef.current?.disconnect?.(); } catch { /* noop */ }
    analyserRef.current = null;
    try { audioContextRef.current?.close?.(); } catch { /* noop */ }
    audioContextRef.current = null;
    mediaStreamRef.current?.getTracks?.().forEach((t) => t.stop());
    mediaStreamRef.current = null;
  };

  // --- Voice mode lifecycle -------------------------------------------
  const stopVoiceMode = () => {
    voiceModeRef.current = false;
    setVoiceMode(false);
    setVoiceState("idle");
    clearTimeout(restartTimerRef.current);
    if (utteranceRef.current) utteranceRef.current.onend = null;
    utteranceRef.current = null;
    try { recognitionRef.current?.abort?.(); } catch { /* noop */ }
    recognitionRef.current = null;
    if (TTS_SUPPORTED) window.speechSynthesis.cancel();
    teardownAudio();
    lastSpokenRef.current = "";
  };

  const startVoiceMode = async () => {
    if (!SpeechRecognitionAPI) return;
    // Request the mic up-front: triggers the permission prompt and gives us an
    // echo-cancelled stream we can watch for hands-free interruption.
    try {
      if (navigator.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
        });
        mediaStreamRef.current = stream;
        setupVad(stream);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "I couldn't access your microphone. Please allow mic permission to chat by voice — you can still type your questions anytime.", isBot: true },
      ]);
      return; // stay in text mode
    }
    voiceModeRef.current = true;
    setVoiceMode(true);
    setVoiceEnabled(true); // spoken replies are inherent to voice mode
    startListening();
  };

  const toggleVoiceMode = () => {
    if (voiceModeRef.current) stopVoiceMode();
    else startVoiceMode();
  };

  // Header speaker toggle: read-aloud for the text chat (independent of voice mode)
  const toggleVoice = () => {
    setVoiceEnabled((prev) => {
      const next = !prev;
      if (!next && TTS_SUPPORTED) window.speechSynthesis.cancel();
      return next;
    });
  };

  const handleSend = async (overrideText, opts = {}) => {
    const userMsg = (typeof overrideText === "string" ? overrideText : input).trim();
    if (!userMsg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);
    setLoading(true);
    if (opts.fromVoice || voiceModeRef.current) setVoiceState("processing");

    try {
      const systemPrompt = getSystemPrompt();
      const botReply = await getChatResponse(messages, userMsg, systemPrompt);
      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
      speak(botReply); // shows as text + speaks aloud + resumes listening in voice mode
    } catch (error) {
      const errText = "Oops! I'm having trouble connecting right now.";
      setMessages((prev) => [...prev, { text: errText, isBot: true }]);
      if (voiceModeRef.current) speak(errText); // still resumes listening afterwards
    } finally {
      setLoading(false);
    }
  };
  handleSendRef.current = handleSend;

  // Stop every voice resource when the window closes
  useEffect(() => {
    if (!isOpen) stopVoiceMode();
  }, [isOpen]);

  // Full cleanup on unmount (recognition, synthesis, timers)
  useEffect(() => {
    return () => {
      voiceModeRef.current = false;
      clearTimeout(restartTimerRef.current);
      if (utteranceRef.current) utteranceRef.current.onend = null;
      try { recognitionRef.current?.abort?.(); } catch { /* noop */ }
      if (TTS_SUPPORTED) window.speechSynthesis.cancel();
      teardownAudio();
    };
  }, []);

  return (
    <div className="fixed bottom-24 right-6 md:bottom-6 z-50 font-sans">
      
      {/* --- Chat Window --- */}
      {isOpen && (
        <div className="w-[320px] md:w-[350px] h-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-slate-700 overflow-hidden animate-fade-in-up mb-4">
          
          {/* Header */}
          <div className="bg-sky-600 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-300 animate-pulse"/>
              <div>
                <span className="font-bold tracking-wide block text-sm">AI Assistant</span>
                <span className="text-[10px] opacity-90 block">Online | Powered by Gemini</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {TTS_SUPPORTED && (
                <button
                  onClick={toggleVoice}
                  title={voiceEnabled ? "Turn off voice replies" : "Read replies aloud"}
                  aria-label={voiceEnabled ? "Turn off voice replies" : "Read replies aloud"}
                  className={`p-1.5 rounded-full transition ${voiceEnabled ? 'bg-sky-700' : 'hover:bg-sky-700'}`}
                >
                  {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:bg-sky-700 p-1 rounded-full transition">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-800">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-3 text-sm rounded-2xl shadow-sm ${
                  msg.isBot 
                    ? 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-600 rounded-tl-none' 
                    : 'bg-sky-600 text-white rounded-tr-none'
                }`}>
                  {msg.isBot ? <MessageContent text={msg.text} /> : msg.text}
                </div>
              </div>
            ))}

            {/* Quick-reply chips (shown before the first user message) */}
            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-xs px-3 py-1.5 rounded-full bg-sky-50 dark:bg-slate-700 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-slate-600 hover:bg-sky-100 dark:hover:bg-slate-600 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Voice hint (first open only) */}
            {messages.length === 1 && !loading && SpeechRecognitionAPI && (
              <p className="text-[11px] text-gray-400 dark:text-slate-500 text-center pt-1">
                🎤 Tip: tap the mic for a hands-free voice conversation
              </p>
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-slate-600 flex gap-1 shadow-sm">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 flex flex-col gap-2">

            {/* Voice conversation status banner */}
            {voiceMode && (
              <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-sky-50 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
                <div className="flex items-center gap-2 text-sm font-medium">
                  {voiceState === "listening" && (
                    <>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                      </span>
                      <span className="text-red-600 dark:text-red-400">Listening…</span>
                    </>
                  )}
                  {voiceState === "processing" && (
                    <>
                      <span className="flex gap-0.5">
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce delay-150"></span>
                      </span>
                      <span className="text-sky-600 dark:text-sky-400">Thinking…</span>
                    </>
                  )}
                  {voiceState === "speaking" && (
                    <>
                      <Volume2 size={16} className="text-emerald-500 animate-pulse" />
                      <span className="text-emerald-600 dark:text-emerald-400">Speaking…</span>
                    </>
                  )}
                </div>
                {voiceState === "speaking" ? (
                  <button
                    onClick={interruptSpeaking}
                    className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-slate-600 hover:bg-sky-100 dark:hover:bg-slate-600 transition"
                  >
                    Interrupt
                  </button>
                ) : (
                  <button
                    onClick={stopVoiceMode}
                    className="text-xs px-2.5 py-1 rounded-full bg-white dark:bg-slate-700 text-red-600 dark:text-red-400 border border-red-200 dark:border-slate-600 hover:bg-red-50 dark:hover:bg-slate-600 transition"
                  >
                    End voice
                  </button>
                )}
              </div>
            )}

            <div className="flex gap-2">
              {SpeechRecognitionAPI && (
                <button
                  onClick={toggleVoiceMode}
                  title={voiceMode ? "Exit voice conversation" : "Start voice conversation"}
                  aria-label={voiceMode ? "Exit voice conversation" : "Start voice conversation"}
                  className={`p-2 rounded-full shadow-md transition ${
                    voiceMode
                      ? 'bg-red-500 text-white animate-pulse'
                      : 'bg-gray-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {voiceMode ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
              )}
              <input
                type="text"
                placeholder={voiceMode ? "Voice mode active…" : "Ask about my projects..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm border border-transparent focus:border-sky-500 transition-all"
              />
              <button
                onClick={() => handleSend()}
                disabled={loading || !input.trim()}
                className="p-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Floating Toggle Button --- */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#004D40] hover:bg-[#003d33] text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 group"
        >
          <div className="relative">
             <MessageCircle size={22} />
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
             </span>
          </div>
          
        </button>
      )}
    </div>
  );
};

export default AiChatWidget;