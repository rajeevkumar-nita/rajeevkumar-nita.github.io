// src/utils/portfolioData.js

// --- 1. RAJEEV'S RAW DATA ---
export const portfolioData = {
  name: "Rajeev Kumar",
  role: "Software Engineer / Full Stack Developer",
  location: "Nagpur, Maharashtra, India",
  
  // Bio from PDF [cite: 7, 8]
  bio: "Rajeev is a Software Engineer at GlobalLogic, specializing in backend and mobile development within the healthcare domain. He has a passion for crafting clean code and designing scalable systems. He has solved over 1500+ DSA problems.",

  // Education [cite: 19, 21, 22]
  education: [
    {
      degree: "B.Tech in Electrical Engineering",
      institution: "NIT Agartala",
      year: "2021 - 2025",
      details: "CGPA: 8.32"
    }
  ],

  // Experience 
  experience: [
    {
      role: "Associate Software Engineer",
      company: "GlobalLogic",
      duration: "Oct 2025 - Present",
      type: "Hybrid, Nagpur",
      description: "Building scalable backend and Android applications for the healthcare sector. Leveraging modern technologies and clean architecture.",
      tech: "Core Java, Android Development, Kotlin, Android Studio" 
    },
    {
      role: "Software Engineer Intern",
      company: "GlobalLogic",
      duration: "Aug 2025 - Sep 2025",
      type: "On-site",
      description: "Gained hands-on experience in building scalable APIs and Microservices.",
      tech: "Java, Spring Boot, Microservices, Git, Postman"
    }
  ],

  // Projects [cite: 63, 66, 70]
  projects: [
    {
      title: "Chatify",
      description: "A real-time chat application enabling seamless communication and instant messaging.",
      techStack: "React, Node.js, Socket.IO"
    },
    {
      title: "PasteAPP",
      description: "A tool to paste, save, and share code snippets instantly and securely.",
      techStack: "React, Firebase"
    },
    {
      title: "Password Generator",
      description: "A tool to create secure, custom, and strong passwords to enhance online security.",
      techStack: "Vanilla JavaScript"
    }
  ],

  // Skills [cite: 80-109]
  skills: {
    languages: "C, C++ (Expert), JavaScript (Expert), Java, Python, SQL",
    frameworks: "React, Node.js, Spring Boot, Android Development",
    tools: "Git, GitHub, Firebase, Linux, Postman",
    fundamentals: "DSA (1500+ solved), OOP, DBMS, OS, Computer Networks"
  },

  // Achievements [cite: 114-121]
  achievements: [
    "LeetCode Knight (Max Rating: 1898, Top 5% Global)",
    "CodeChef 3* Coder (Max Rating: 1607)",
    "Codeforces Specialist (Max Rating: 1408)",
    "GeeksforGeeks 4* Coder (Ranked Top 75 among peers)"
  ],

  // Leadership [cite: 127, 133]
  leadership: [
    "Co-Founder of PDB (Peer Learning Group) at NIT Agartala.",
    "Mentored 100+ students in DSA and Web Development."
  ]
};

// --- 2. SYSTEM PROMPT GENERATOR ---
// This function converts the data above into instructions for the AI
export const getSystemPrompt = () => {
  const data = portfolioData;

  return `
    You are an AI Assistant representing **Rajeev Kumar**, a Software Engineer at GlobalLogic.
    Your goal is to answer questions about Rajeev's career, skills, and projects professionally.

    **Here is Rajeev's Complete Profile:**

    👤 **About**: ${data.bio}
    
    💼 **Current Role**: ${data.experience[0].role} at ${data.experience[0].company} (${data.experience[0].duration}). Working on ${data.experience[0].description} using ${data.experience[0].tech}.

    🎓 **Education**: ${data.education[0].degree} from ${data.education[0].institution} (${data.education[0].details}).

    🚀 **Top Projects**:
    ${data.projects.map(p => `- ${p.title}: ${p.description} (Built with ${p.techStack})`).join('\n')}

    🛠 **Technical Skills**:
    - Languages: ${data.skills.languages}
    - Tools: ${data.skills.tools}
    - Core: ${data.skills.fundamentals}

    🏆 **Coding Achievements**:
    ${data.achievements.join('\n')}

    🌟 **Leadership**: ${data.leadership[0]}

    **Guidelines for You:**
    1. Answer as if you are Rajeev's helpful assistant.
    2. Keep answers concise (2-3 sentences max) unless asked for details.
    3. If asked about "Experience", mention his current role at GlobalLogic and his internship.
    4. If asked about "DSA" or "Coding", mention his LeetCode Knight rating and 1500+ problems solved.
    5. You can reply in English or "Hinglish" if the user speaks Hindi.
  `;
};