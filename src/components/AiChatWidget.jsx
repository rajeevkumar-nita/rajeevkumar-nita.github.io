// import React, { useState, useRef, useEffect } from 'react';
// import { getChatResponse } from '../utils/aiService';
// import { getSystemPrompt } from '../utils/portfolioData';
// import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
// import sanityClient from '../client'; // Aapka sanity client import karein

// const AiChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hi! I'm Rajeev's AI Assistant. Ask me anything about his projects!", isBot: true }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [projects, setProjects] = useState([]);
  
//   const messagesEndRef = useRef(null);

//   // Auto-scroll to bottom
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Fetch Projects from Sanity on Load (AI ko latest data dene ke liye)
//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "project"]{title, description, tags}`).then((data) => {
//       setProjects(data);
//     }).catch(console.error);
//   }, []);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg = input;
//     setInput("");
    
//     // 1. Add User Message
//     setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
//     setLoading(true);

//     // 2. Call AI
//     const systemPrompt = getSystemPrompt(projects); // Dynamic Data pass kar rahe hain
//     const botReply = await getChatResponse(messages, userMsg, systemPrompt);

//     // 3. Add AI Reply
//     setMessages(prev => [...prev, { text: botReply, isBot: true }]);
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50 font-sans">
      
//       {/* --- Chat Window --- */}
//       {isOpen && (
//         <div className="w-[350px] h-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-slate-700 overflow-hidden animate-fade-in-up mb-4">
          
//           {/* Header */}
//           <div className="bg-sky-600 p-4 flex justify-between items-center text-white">
//             <div className="flex items-center gap-2">
//               <Sparkles size={18} className="animate-pulse"/>
//               <span className="font-semibold tracking-wide">AI Assistant</span>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="hover:bg-sky-700 p-1 rounded-full transition">
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages Body */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-800">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
//                 <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${
//                   msg.isBot 
//                     ? 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-600 rounded-tl-none shadow-sm' 
//                     : 'bg-sky-600 text-white rounded-tr-none shadow-md'
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-slate-600 flex gap-1">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 flex gap-2">
//             <input 
//               type="text" 
//               placeholder="Ask about my skills..." 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//               className="flex-1 bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
//             />
//             <button onClick={handleSend} disabled={loading} className="p-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition disabled:opacity-50">
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* --- Toggle Button (UST Style Pill) --- */}
//       {!isOpen && (
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="bg-slate-900 dark:bg-sky-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
//         >
//           <div className="relative">
//              <MessageCircle size={24} />
//              <span className="absolute -top-1 -right-1 flex h-3 w-3">
//                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
//              </span>
//           </div>
//           <span className="font-semibold text-sm tracking-wide">Ask AI Agent</span>
//         </button>
//       )}
//     </div>
//   );
// };

// export default AiChatWidget;







// import React, { useState, useRef, useEffect } from 'react';
// import { getChatResponse } from '../utils/aiService';
// import { getSystemPrompt } from '../utils/portfolioData';
// import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
// // 👇 1. Sanity hata kar Local Data import karein
// // import sanityClient from '../client'; 
// import { projects } from '../data/projectData'; // <-- Check karein ki export name 'projects' hi ho, ya 'default' ho

// const AiChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: "Hi! I'm Rajeev's AI Assistant. Ask me anything about his projects!", isBot: true }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
  
//   // State for projects hatake direct variable use karenge
//   // const [projects, setProjects] = useState([]);

//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // 👇 2. Yeh useEffect hata dein (Sanity fetch wala)
//   /*
//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "project"]{title, description, tags}`).then((data) => {
//       setProjects(data);
//     }).catch(console.error);
//   }, []);
//   */

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg = input;
//     setInput("");
    
//     setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
//     setLoading(true);

//     // 👇 3. Direct projects data pass karein
//     const systemPrompt = getSystemPrompt(projects); 
    
//     const botReply = await getChatResponse(messages, userMsg, systemPrompt);

//     setMessages(prev => [...prev, { text: botReply, isBot: true }]);
//     setLoading(false);
//   };

//   return (
//     // ... baaki JSX code same rahega ...
//     <div className="fixed bottom-6 right-6 z-50 font-sans">
      
//       {/* --- Chat Window --- */}
//       {isOpen && (
//         <div className="w-[350px] h-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col border border-gray-200 dark:border-slate-700 overflow-hidden animate-fade-in-up mb-4">
          
//           {/* Header */}
//           <div className="bg-sky-600 p-4 flex justify-between items-center text-white">
//             <div className="flex items-center gap-2">
//               <Sparkles size={18} className="animate-pulse"/>
//               <span className="font-semibold tracking-wide">AI Assistant</span>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="hover:bg-sky-700 p-1 rounded-full transition">
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages Body */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-800">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
//                 <div className={`max-w-[80%] p-3 text-sm rounded-2xl ${
//                   msg.isBot 
//                     ? 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-slate-600 rounded-tl-none shadow-sm' 
//                     : 'bg-sky-600 text-white rounded-tr-none shadow-md'
//                 }`}>
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start">
//                 <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-slate-600 flex gap-1">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 flex gap-2">
//             <input 
//               type="text" 
//               placeholder="Ask about my skills..." 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
//               className="flex-1 bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
//             />
//             <button onClick={handleSend} disabled={loading} className="p-2 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition disabled:opacity-50">
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* --- Toggle Button (UST Style Pill) --- */}
//       {!isOpen && (
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="bg-slate-900 dark:bg-sky-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
//         >
//           <div className="relative">
//              <MessageCircle size={24} />
//              <span className="absolute -top-1 -right-1 flex h-3 w-3">
//                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
//              </span>
//           </div>
//           <span className="font-semibold text-sm tracking-wide">Ask AI Agent</span>
//         </button>
//       )}
//     </div>
//   );
// };

// export default AiChatWidget;








import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../utils/aiService'; // Ensure this path is correct
import { getSystemPrompt } from '../utils/portfolioData'; // Importing the new data
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I'm Rajeev's AI Assistant. Ask me anything!", 
      isBot: true 
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
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
    } catch (error) {
      setMessages(prev => [...prev, { text: "Oops! I'm having trouble connecting right now.", isBot: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
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
            <button onClick={() => setIsOpen(false)} className="hover:bg-sky-700 p-1 rounded-full transition">
              <X size={20} />
            </button>
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
                  {msg.text}
                </div>
              </div>
            ))}
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
            <input 
              type="text" 
              placeholder="Ask about my projects..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm border border-transparent focus:border-sky-500 transition-all"
            />
            <button 
              onClick={handleSend} 
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
          <span className="font-semibold text-sm">Ask AI Agent</span>
        </button>
      )}
    </div>
  );
};

export default AiChatWidget;