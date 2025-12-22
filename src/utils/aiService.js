const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Hum "gemini-1.5-flash" use kar rahe hain kyunki ye fast, cheap aur latest stable version hai.
const MODEL_NAME = "gemini-2.5-flash"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

//Helper function to handle errors
const handleApiError = async (response) => {
    const errorData = await response.json();
    console.error("🔥 Google API Error:", errorData);
    return `Error: ${errorData.error?.message || "Connection failed"}`;
};

/**
 * ---------------------------------------------------------
 * FEATURE 1: BLOG SUMMARIZER (Hinglish)
 * ---------------------------------------------------------
 */
export const getSummaryInHinglish = async (textToSummarize) => {
  // 1. Safety Check
  if (!API_KEY) {
    console.error("❌ API Key Missing!");
    return "Error: API Key nahi mili. .env file check karein.";
  }

  try {
    // 2. Payload
    const payload = {
      contents: [{
        parts: [{
          text: `You are a helpful assistant for a software engineer's portfolio.
          
          Task: Summarize the following blog post in 3-4 bullet points.
          Language: Use "Hinglish" (Hindi + English mix) strictly.
          Tone: Casual and professional.
          
          Blog Content: "${textToSummarize}"`
        }]
      }]
    };

    // 3. Request Send Karna
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) return await handleApiError(response);

    // 4. Success! Result nikalna
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("🚨 Network Error:", error);
    return "Sorry yaar, abhi AI connect nahi ho pa raha. Thodi der baad try karna!";
  }
};

/**
 * ---------------------------------------------------------
 * FEATURE 2: PORTFOLIO CHAT AGENT (For Chat Widget)
 * ---------------------------------------------------------
 * @param {Array} history - Previous chat messages [{text, isBot}]
 * @param {String} userMessage - Current question from user
 * @param {String} systemPrompt - Instructions about You (Projects, Skills, Bio)
 */
export const getChatResponse = async (history, userMessage, systemPrompt) => {
  if (!API_KEY) return "Error: API Key missing.";

  try {
    // 1. Format History for Gemini
    // Gemini ko previous context samjhane ke liye hum history bhejte hain
    const formattedHistory = history.map((msg) => ({
      role: msg.isBot ? "model" : "user",
      parts: [{ text: msg.text }]
    }));

    // 2. Construct Payload
    // Hum system prompt ko sabse pehle "user" message ki tarah bhejte hain taaki AI ko context mile
    const contents = [
      {
        role: "user",
        parts: [{ text: systemPrompt }] // Yeh AI ka "Brain" hai (Aapka Resume data)
      },
      {
        role: "model",
        parts: [{ text: "Understood. I am ready to answer questions about Rajeev and his portfolio." }] // AI acknowledge karega
      },
      ...formattedHistory, // Purani baatein
      {
        role: "user",
        parts: [{ text: userMessage }] // Abhi ka sawal
      }
    ];

    const payload = { contents };

    // 3. API Call
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) return await handleApiError(response);

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error("Chat Error:", error);
    return "Sorry, I am currently offline. Please try again later.";
  }
};