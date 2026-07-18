
import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../utils/aiService'; // Ensure this path is correct
import { getSystemPrompt } from '../utils/portfolioData'; // Importing the new data
import { MessageCircle, X, Send, Sparkles, Mic, Volume2, VolumeX } from 'lucide-react';

// Browser Web Speech API support (no dependencies / no API cost)
const SpeechRecognitionAPI =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;
const TTS_SUPPORTED = typeof window !== 'undefined' && 'speechSynthesis' in window;

// Strip markdown so it is read aloud cleanly
const stripMarkdown = (text) =>
  text.replace(/\*\*/g, '').replace(/[#`>_]/g, '').replace(/^\s*[-*]\s+/gm, '');

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
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const voiceEnabledRef = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Keep a ref in sync so async replies can check the latest voice setting
  useEffect(() => {
    voiceEnabledRef.current = voiceEnabled;
  }, [voiceEnabled]);

  // Stop any voice activity when the chat is closed
  useEffect(() => {
    if (!isOpen) {
      if (TTS_SUPPORTED) window.speechSynthesis.cancel();
      recognitionRef.current?.abort?.();
      setIsListening(false);
    }
  }, [isOpen]);

  // Read a bot reply aloud (only if voice output is enabled)
  const speak = (text) => {
    if (!voiceEnabledRef.current || !TTS_SUPPORTED) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(stripMarkdown(text));
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  // Start / stop microphone dictation
  const toggleMic = () => {
    if (!SpeechRecognitionAPI) return;
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSend(transcript); // auto-send the spoken question
    };
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  };

  const toggleVoice = () => {
    setVoiceEnabled((prev) => {
      const next = !prev;
      if (!next && TTS_SUPPORTED) window.speechSynthesis.cancel();
      return next;
    });
  };

  const handleSend = async (overrideText) => {
    const userMsg = (typeof overrideText === "string" ? overrideText : input).trim();
    if (!userMsg || loading) return;

    setInput("");
    
    // 1. Add User Message to Chat
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setLoading(true);

    try {
      // 2. Get the System Prompt (The Data)
      const systemPrompt = getSystemPrompt(); 
      
      // 3. Send to Gemini AI
      const botReply = await getChatResponse(messages, userMsg, systemPrompt);

      // 4. Add Bot Reply to Chat
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
      speak(botReply); // 5. Read it aloud if voice output is on
    } catch (error) {
      setMessages(prev => [...prev, { text: "Oops! I'm having trouble connecting right now.", isBot: true }]);
    } finally {
      setLoading(false);
    }
  };

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
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 flex gap-2">
            {SpeechRecognitionAPI && (
              <button
                onClick={toggleMic}
                title={isListening ? "Stop listening" : "Ask by voice"}
                aria-label={isListening ? "Stop listening" : "Ask by voice"}
                className={`p-2 rounded-full shadow-md transition ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                }`}
              >
                <Mic size={18} />
              </button>
            )}
            <input 
              type="text" 
              placeholder={isListening ? "Listening..." : "Ask about my projects..."} 
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