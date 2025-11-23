// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from '../client.js';
// import { PortableText } from '@portabletext/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Comments from '../components/Comments';
// import SEO from '../components/SEO'; // <-- Change 1: SEO Import kiya

// const SinglePost = () => {
//   const [postData, setPostData] = useState(null);
//   const { slug } = useParams();

//   useEffect(() => {
//     // <-- Change 2: Query update ki taaki SEO data bhi aaye
//     sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
//       title,
//       "mainImageUrl": mainImage.asset->url,
//       body,
//       "authorName": author->name,
//       publishedAt,
//       seo {
//         metaTitle,
//         metaDescription,
//         keywords,
//         "shareImage": openGraphImage.asset->url
//       }
//     }`, { slug })
//     .then((data) => setPostData(data))
//     .catch(console.error);
//   }, [slug]);

//   if (!postData) {
//     return (
//       <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
//         <Header />
//         <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-slate-900 min-h-screen">
      
//       {/* <-- Change 3: SEO Component yahan lagaya */}
//       {/* Agar Sanity mein SEO nahi bhara, toh wo automatic Title aur Main Image use karega */}
//       <SEO 
//         title={postData.seo?.metaTitle || postData.title}
//         description={postData.seo?.metaDescription}
//         keywords={postData.seo?.keywords}
//         image={postData.seo?.shareImage || postData.mainImageUrl}
//         url={window.location.href}
//       />

//       <Header />
//       <main className="pt-24">
//         <article className="max-w-4xl mx-auto py-12 px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
//             {postData.title}
//           </h1>
//           <p className="text-slate-600 dark:text-slate-400 mb-4">
//             By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
//           </p>
          
//           {postData.mainImageUrl && (
//              <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
//           )}
          
//           {/* Blog Content */}
//           <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
//             <PortableText value={postData.body} />
//           </div>

//           {/* Comments Section */}
//           <div className="mt-16">
//               <hr className="border-slate-300 dark:border-slate-700 mb-8" />
//               <Comments />
//           </div>

//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default SinglePost;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from '../client.js';
// import { PortableText } from '@portabletext/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Comments from '../components/Comments';
// import SEO from '../components/SEO';
// // 1. AI Service Import kiya
// import { getSummaryInHinglish } from '../utils/aiService';

// const SinglePost = () => {
//   const [postData, setPostData] = useState(null);
//   const { slug } = useParams();

//   // 2. AI Feature ke liye naya State
//   const [summary, setSummary] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);

//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
//       title,
//       "mainImageUrl": mainImage.asset->url,
//       body,
//       "authorName": author->name,
//       publishedAt,
//       seo {
//         metaTitle,
//         metaDescription,
//         keywords,
//         "shareImage": openGraphImage.asset->url
//       }
//     }`, { slug })
//     .then((data) => setPostData(data))
//     .catch(console.error);
//   }, [slug]);

//   // 3. AI Button ka Function
//   const handleGenerateSummary = async () => {
//     if (!postData) return;
    
//     setIsGenerating(true);
//     // Title aur Body bhej rahe hain AI ko
//     // JSON.stringify isliye use kiya kyuki body ek complex array hai (Portable Text)
//     const textToSummarize = `Title: ${postData.title}. \n\n Content: ${JSON.stringify(postData.body)}`;
    
//     const aiResponse = await getSummaryInHinglish(textToSummarize);
//     setSummary(aiResponse);
//     setIsGenerating(false);
//   };

//   if (!postData) {
//     return (
//       <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
//         <Header />
//         <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-slate-900 min-h-screen">
      
//       <SEO 
//         title={postData.seo?.metaTitle || postData.title}
//         description={postData.seo?.metaDescription}
//         keywords={postData.seo?.keywords}
//         image={postData.seo?.shareImage || postData.mainImageUrl}
//         url={window.location.href}
//       />

//       <Header />
//       <main className="pt-24">
//         <article className="max-w-4xl mx-auto py-12 px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
//             {postData.title}
//           </h1>
//           <p className="text-slate-600 dark:text-slate-400 mb-4">
//             By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
//           </p>
          
//           {postData.mainImageUrl && (
//              <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
//           )}
          
//           {/* ---------------- AI FEATURE START ---------------- */}
//           <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div>
//                 <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2">
//                   ✨ AI Summary <span className="text-xs font-normal text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">Hinglish Beta</span>
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
//                   Time kam hai? AI se short mein samjhein.
//                 </p>
//               </div>
//               <button 
//                 onClick={handleGenerateSummary}
//                 disabled={isGenerating}
//                 className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//               >
//                 {isGenerating ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Writing...
//                   </>
//                 ) : (
//                   <>🤖 Summarize with AI</>
//                 )}
//               </button>
//             </div>

//             {/* Result Area */}
//             {summary && (
//               <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-sky-500 text-slate-700 dark:text-slate-300">
//                 <div className="prose dark:prose-invert">
//                   {summary.split('-').map((line, index) => (
//                     line.trim() && <p key={index} className="mb-2">👉 {line.replace('•', '').trim()}</p>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* ---------------- AI FEATURE END ---------------- */}

//           {/* Blog Content */}
//           <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
//             <PortableText value={postData.body} />
//           </div>

//           {/* Comments Section */}
//           <div className="mt-16">
//               <hr className="border-slate-300 dark:border-slate-700 mb-8" />
//               <Comments />
//           </div>

//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default SinglePost;






// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from '../client.js';
// import { PortableText } from '@portabletext/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Comments from '../components/Comments';
// import SEO from '../components/SEO';
// // 1. AI Service Import
// import { getSummaryInHinglish } from '../utils/aiService';

// const SinglePost = () => {
//   const [postData, setPostData] = useState(null);
//   const { slug } = useParams();

//   // 2. AI Feature States
//   const [summary, setSummary] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSummaryVisible, setIsSummaryVisible] = useState(false); // <-- New State for Minimize

//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
//       title,
//       "mainImageUrl": mainImage.asset->url,
//       body,
//       "authorName": author->name,
//       publishedAt,
//       seo {
//         metaTitle,
//         metaDescription,
//         keywords,
//         "shareImage": openGraphImage.asset->url
//       }
//     }`, { slug })
//     .then((data) => setPostData(data))
//     .catch(console.error);
//   }, [slug]);

//   // 3. AI Button Function
//   const handleGenerateSummary = async () => {
//     if (!postData) return;
    
//     // Agar summary pehle se hai, toh bas wapas dikha do (API call mat karo)
//     if (summary) {
//         setIsSummaryVisible(true);
//         return;
//     }

//     setIsGenerating(true);
//     const textToSummarize = `Title: ${postData.title}. \n\n Content: ${JSON.stringify(postData.body)}`;
    
//     const aiResponse = await getSummaryInHinglish(textToSummarize);
//     setSummary(aiResponse);
//     setIsSummaryVisible(true); // <-- Summary aate hi box open karo
//     setIsGenerating(false);
//   };

//   if (!postData) {
//     return (
//       <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
//         <Header />
//         <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-slate-900 min-h-screen">
      
//       <SEO 
//         title={postData.seo?.metaTitle || postData.title}
//         description={postData.seo?.metaDescription}
//         keywords={postData.seo?.keywords}
//         image={postData.seo?.shareImage || postData.mainImageUrl}
//         url={window.location.href}
//       />

//       <Header />
//       <main className="pt-24">
//         <article className="max-w-4xl mx-auto py-12 px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
//             {postData.title}
//           </h1>
//           <p className="text-slate-600 dark:text-slate-400 mb-4">
//             By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
//           </p>
          
//           {postData.mainImageUrl && (
//              <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
//           )}
          
//           {/* ---------------- AI FEATURE START ---------------- */}
//           <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div>
//                 <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2">
//                   ✨ AI Summary <span className="text-xs font-normal text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">Hinglish Beta</span>
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
//                   Get a quick summary with AI.
//                 </p>
//               </div>
              
//               {/* Button: Agar open hai to 'Close', nahi to 'Summarize' */}
//               {!isSummaryVisible ? (
//                   <button 
//                     onClick={handleGenerateSummary}
//                     disabled={isGenerating}
//                     className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     {isGenerating ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Writing...
//                       </>
//                     ) : (
//                       <>🤖 Summarize with AI</>
//                     )}
//                   </button>
//               ) : (
//                   <button 
//                     onClick={() => setIsSummaryVisible(false)}
//                     className="px-4 py-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium transition-colors"
//                   >
//                     Close Summary
//                   </button>
//               )}
//             </div>

//             {/* Result Area with Close Button */}
//             {summary && isSummaryVisible && (
//               <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-sky-500 text-slate-700 dark:text-slate-300 relative fade-in">
                
//                 {/* Absolute Close Icon (Top Right) */}
//                 <button 
//                     onClick={() => setIsSummaryVisible(false)}
//                     className="absolute top-2 right-2 text-slate-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
//                     title="Minimize Summary"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 </button>

//                 <div className="prose dark:prose-invert pr-6">
//                   {summary.split('-').map((line, index) => (
//                     line.trim() && <p key={index} className="mb-2">👉 {line.replace('•', '').trim()}</p>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* ---------------- AI FEATURE END ---------------- */}

//           {/* Blog Content */}
//           <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
//             <PortableText value={postData.body} />
//           </div>

//           {/* Comments Section */}
//           <div className="mt-16">
//               <hr className="border-slate-300 dark:border-slate-700 mb-8" />
//               <Comments />
//           </div>

//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default SinglePost;







// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import sanityClient from '../client.js';
// import { PortableText } from '@portabletext/react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Comments from '../components/Comments';
// import SEO from '../components/SEO';
// import { getSummaryInHinglish } from '../utils/aiService';

// const SinglePost = () => {
//   const [postData, setPostData] = useState(null);
//   const { slug } = useParams();

//   // --- States ---
//   const [summary, setSummary] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isSummaryVisible, setIsSummaryVisible] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false); // 🔊 New State for Audio

//   useEffect(() => {
//     sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
//       title,
//       "mainImageUrl": mainImage.asset->url,
//       body,
//       "authorName": author->name,
//       publishedAt,
//       seo {
//         metaTitle,
//         metaDescription,
//         keywords,
//         "shareImage": openGraphImage.asset->url
//       }
//     }`, { slug })
//     .then((data) => setPostData(data))
//     .catch(console.error);
//   }, [slug]);

//   // 🔊 Stop Audio when leaving the page (Cleanup)
//   useEffect(() => {
//     return () => {
//       window.speechSynthesis.cancel();
//     };
//   }, []);

//   // --- Functions ---

//   const handleGenerateSummary = async () => {
//     if (!postData) return;
    
//     if (summary) {
//         setIsSummaryVisible(true);
//         return;
//     }

//     setIsGenerating(true);
//     const textToSummarize = `Title: ${postData.title}. \n\n Content: ${JSON.stringify(postData.body)}`;
    
//     const aiResponse = await getSummaryInHinglish(textToSummarize);
//     setSummary(aiResponse);
//     setIsSummaryVisible(true);
//     setIsGenerating(false);
//   };

//   // 🔊 Handle Text-to-Speech
//   const handleSpeak = () => {
//     if ('speechSynthesis' in window) {
//       if (isSpeaking) {
//         // Agar bol raha hai, toh chup karao
//         window.speechSynthesis.cancel();
//         setIsSpeaking(false);
//       } else {
//         // Agar chup hai, toh bulwao
//         const utterance = new SpeechSynthesisUtterance(summary);
//         utterance.lang = 'hi-IN'; // Indian Accent try karega (agar available ho)
//         utterance.rate = 0.9; // Thoda aaram se bolega
//         utterance.pitch = 1;
        
//         // Jab bolna khatam ho jaye button reset karo
//         utterance.onend = () => setIsSpeaking(false);

//         window.speechSynthesis.speak(utterance);
//         setIsSpeaking(true);
//       }
//     } else {
//       alert("Sorry, your browser does not support text-to-speech!");
//     }
//   };

//   if (!postData) {
//     return (
//       <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
//         <Header />
//         <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white dark:bg-slate-900 min-h-screen">
//       <SEO 
//         title={postData.seo?.metaTitle || postData.title}
//         description={postData.seo?.metaDescription}
//         keywords={postData.seo?.keywords}
//         image={postData.seo?.shareImage || postData.mainImageUrl}
//         url={window.location.href}
//       />

//       <Header />
//       <main className="pt-24">
//         <article className="max-w-4xl mx-auto py-12 px-4">
//           <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
//             {postData.title}
//           </h1>
//           <p className="text-slate-600 dark:text-slate-400 mb-4">
//             By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
//           </p>
          
//           {postData.mainImageUrl && (
//              <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
//           )}
          
//           {/* ---------------- AI & AUDIO FEATURE START ---------------- */}
//           <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div>
//                 <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2">
//                   ✨ AI Summary <span className="text-xs font-normal text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">Hinglish Beta</span>
//                 </h3>
//                 <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
//                   Short on time? Get a quick summary with AI.
//                 </p>
//               </div>
              
//               {!isSummaryVisible ? (
//                   <button 
//                     onClick={handleGenerateSummary}
//                     disabled={isGenerating}
//                     className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     {isGenerating ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Writing...
//                       </>
//                     ) : (
//                       <>🤖 Summarize with AI</>
//                     )}
//                   </button>
//               ) : (
//                   <button 
//                     onClick={() => setIsSummaryVisible(false)}
//                     className="px-4 py-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium transition-colors"
//                   >
//                     Close Summary
//                   </button>
//               )}
//             </div>

//             {/* Result Area */}
//             {summary && isSummaryVisible && (
//               <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-sky-500 text-slate-700 dark:text-slate-300 relative fade-in">
                
//                 {/* Action Buttons Container (Top Right) */}
//                 <div className="absolute top-2 right-2 flex gap-2">
                    
//                     {/* 🔊 SPEAKER BUTTON */}
//                     <button 
//                         onClick={handleSpeak}
//                         className={`p-2 rounded-full transition-colors ${isSpeaking ? 'bg-sky-100 text-sky-600 animate-pulse' : 'text-slate-400 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
//                         title={isSpeaking ? "Stop Listening" : "Listen to Summary"}
//                     >
//                         {isSpeaking ? (
//                             // Stop Icon
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
//                             </svg>
//                         ) : (
//                             // Play/Speaker Icon
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
//                             </svg>
//                         )}
//                     </button>

//                     {/* ❌ CLOSE BUTTON */}
//                     <button 
//                         onClick={() => setIsSummaryVisible(false)}
//                         className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
//                         title="Minimize Summary"
//                     >
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>
//                 </div>

//                 <div className="prose dark:prose-invert pr-16"> {/* Padding Right badhaya taaki buttons overlap na karein */}
//                   {summary.split('-').map((line, index) => (
//                     line.trim() && <p key={index} className="mb-2">👉 {line.replace('•', '').trim()}</p>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* ---------------- AI & AUDIO FEATURE END ---------------- */}

//           {/* Blog Content */}
//           <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
//             <PortableText value={postData.body} />
//           </div>

//           {/* Comments Section */}
//           <div className="mt-16">
//               <hr className="border-slate-300 dark:border-slate-700 mb-8" />
//               <Comments />
//           </div>

//         </article>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default SinglePost;




import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import { PortableText } from '@portabletext/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Comments';
import SEO from '../components/SEO';
import { getSummaryInHinglish } from '../utils/aiService';

const SinglePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  // --- States ---
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      title,
      "mainImageUrl": mainImage.asset->url,
      body,
      "authorName": author->name,
      publishedAt,
      seo {
        metaTitle,
        metaDescription,
        keywords,
        "shareImage": openGraphImage.asset->url
      }
    }`, { slug })
    .then((data) => setPostData(data))
    .catch(console.error);
  }, [slug]);

  // 🔊 Cleanup: Stop Audio when leaving page
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // --- Functions ---

  const handleGenerateSummary = async () => {
    if (!postData) return;
    
    if (summary) {
        setIsSummaryVisible(true);
        return;
    }

    setIsGenerating(true);
    const textToSummarize = `Title: ${postData.title}. \n\n Content: ${JSON.stringify(postData.body)}`;
    
    const aiResponse = await getSummaryInHinglish(textToSummarize);
    setSummary(aiResponse);
    setIsSummaryVisible(true);
    setIsGenerating(false);
  };

  // 🔊 Better Voice Logic
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(summary);
        
        // Voices load hone mein kabhi kabhi time lagta hai
        let voices = window.speechSynthesis.getVoices();
        
        // Agar voices empty hain (Chrome bug), to wait karo
        if (voices.length === 0) {
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                speakText(utterance, voices);
            };
        } else {
            speakText(utterance, voices);
        }
      }
    } else {
      alert("Sorry, browser audio not supported.");
    }
  };

  // Helper function to select voice and speak
  const speakText = (utterance, voices) => {
    const preferredVoice = voices.find(voice => 
        voice.name.includes('Google Hindi') || 
        voice.name.includes('Hindi') || 
        voice.lang === 'hi-IN' ||
        voice.lang === 'en-IN'
    );

    if (preferredVoice) {
        utterance.voice = preferredVoice;
        utterance.rate = 1.0; 
    } else {
        utterance.rate = 0.9; 
    }

    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  if (!postData) {
    return (
      <div className="bg-gray-100 dark:bg-slate-900 min-h-screen">
        <Header />
        <div className="text-center py-20 text-sky-700 dark:text-sky-400">Loading post...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      <SEO 
        title={postData.seo?.metaTitle || postData.title}
        description={postData.seo?.metaDescription}
        keywords={postData.seo?.keywords}
        image={postData.seo?.shareImage || postData.mainImageUrl}
        url={window.location.href}
      />

      <Header />
      <main className="pt-24">
        <article className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700 dark:text-sky-400 mb-6">
            {postData.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            By {postData.authorName} on {new Date(postData.publishedAt).toLocaleDateString()}
          </p>
          
          {postData.mainImageUrl && (
             <img src={postData.mainImageUrl} alt={postData.title} className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mb-8" />
          )}
          
          {/* ---------------- AI & AUDIO FEATURE START ---------------- */}
          <div className="mb-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-sky-100 dark:border-slate-700 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400 flex items-center gap-2">
                  ✨ AI Summary <span className="text-xs font-normal text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded-full">Hinglish Beta</span>
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Get a quick summary with AI.
                </p>
              </div>
              
              {!isSummaryVisible ? (
                  <button 
                    onClick={handleGenerateSummary}
                    disabled={isGenerating}
                    className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg transition-all shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Writing...
                      </>
                    ) : (
                      <>🤖 Summarize with AI</>
                    )}
                  </button>
              ) : (
                  <button 
                    onClick={() => setIsSummaryVisible(false)}
                    className="px-4 py-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 font-medium transition-colors"
                  >
                    Close Summary
                  </button>
              )}
            </div>

            {/* Result Area */}
            {summary && isSummaryVisible && (
              <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-sky-500 text-slate-700 dark:text-slate-300 relative fade-in">
                
                {/* Action Buttons Container */}
                <div className="absolute top-2 right-2 flex gap-2">
                    
                    {/* 🔊 SPEAKER BUTTON */}
                    <button 
                        onClick={handleSpeak}
                        className={`p-2 rounded-full transition-colors ${isSpeaking ? 'bg-sky-100 text-sky-600 animate-pulse' : 'text-slate-400 hover:text-sky-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                        title={isSpeaking ? "Stop Listening" : "Listen to Summary"}
                    >
                        {isSpeaking ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                        )}
                    </button>

                    {/* ❌ CLOSE BUTTON */}
                    <button 
                        onClick={() => setIsSummaryVisible(false)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                        title="Minimize Summary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="prose dark:prose-invert pr-16">
                  {summary.split('-').map((line, index) => (
                    line.trim() && <p key={index} className="mb-2">👉 {line.replace('•', '').trim()}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* ---------------- AI & AUDIO FEATURE END ---------------- */}

          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-none text-slate-800 dark:text-slate-200">
            <PortableText value={postData.body} />
          </div>

          {/* Comments Section */}
          <div className="mt-16">
              <hr className="border-slate-300 dark:border-slate-700 mb-8" />
              <Comments />
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;