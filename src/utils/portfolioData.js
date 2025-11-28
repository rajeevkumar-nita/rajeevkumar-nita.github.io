// src/utils/portfolioData.js

// 👇 1. Import Sam's Data
import { samData } from '../data/samData';

// --- 2. RAJEEV'S DATA ---
export const portfolioData = {
  name: "Rajeev Kumar",
  role: "Software Engineer / Full Stack Developer",
  location: "Nagpur, Maharashtra, India", // 👈 Fixed: Comma added here
  
  // Bio
  bio: "Rajeev is a Software Engineer at GlobalLogic, specializing in backend and mobile development within the healthcare domain. He has a passion for crafting clean code and designing scalable systems. He has solved over 1500+ DSA problems.",

  // Education
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

  // Projects
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

  // Skills
  skills: {
    languages: "C, C++ (Expert), JavaScript (Expert), Java, Python, SQL",
    frameworks: "React, Node.js, Spring Boot, Android Development",
    tools: "Git, GitHub, Firebase, Linux, Postman",
    fundamentals: "DSA (1500+ solved), OOP, DBMS, OS, Computer Networks"
  },

  // Achievements
  achievements: [
    "LeetCode Knight (Max Rating: 1898, Top 5% Global)",
    "CodeChef 3* Coder (Max Rating: 1607)",
    "Codeforces Specialist (Max Rating: 1408)",
    "GeeksforGeeks 4* Coder (Ranked Top 75 among peers)"
  ],

  // Leadership
  leadership: [
    "Co-Founder of PDB (Peer Learning Group) at NIT Agartala.",
    "Mentored 100+ students in DSA and Web Development."
  ]
};

// --- 3. SYSTEM PROMPT GENERATOR ---
export const getSystemPrompt = () => {
  const data = portfolioData;
  const sam = samData; // Using imported Sam data

  return `
    You are an AI Assistant representing **Rajeev Kumar**, a Software Engineer at GlobalLogic.
    Your goal is to answer questions about Rajeev's career, skills, and projects professionally.

    **--- RAJEEV'S PROFILE ---**
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

    **--- SECRET DATA: RAJEEV'S GIRLFRIEND ---**
    (Only answer if user specifically asks about "girlfriend", "partner", "Sam", or "GF")
    
    Her name is **${sam.name}** (Real name: ${sam.realName}).
    - **Education**: Pursuing ${sam.education}.
    - **Skills**: ${sam.skills.join(", ")}.
    - **Project**: Built a ${sam.projects[0].title} using ${sam.projects[0].tech}.
    - **Achievements**: ${sam.achievements.join(", ")}.
    - **Hobbies**: ${sam.hobbies}.

    **--- GUIDELINES FOR YOU ---**
    1. **Primary Focus:** Always answer as Rajeev's professional assistant first.
    2. **Conciseness:** Keep answers short (2-3 sentences) unless asked for details.
    3. **Experience:** If asked about "Experience", mention GlobalLogic (Current) and Internship.
    4. **Coding:** Highlight 1500+ DSA problems and LeetCode Knight rank if asked about skills.
    5. **Girlfriend:** If asked about his girlfriend, use the name "**Sam**" (not full name unless asked) and describe her using the secret data provided above.
    6. **Language:** You can reply in English or "Hinglish" (Hindi+English) if the user speaks Hindi.
  `;
};