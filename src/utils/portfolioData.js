// src/utils/portfolioData.js

// 👇 1. Import Sam's Data
import { samData } from '../data/samData';

// --- 2. RAJEEV'S DATA ---
export const portfolioData = {
  name: "Rajeev Kumar",
  role: "Software Engineer / Full Stack Developer",
  location: "Nagpur, Maharashtra, India",

  // Contact & Links (useful for recruiters)
  contact: {
    email: "rajeev.nita2025@gmail.com",
    linkedin: "https://www.linkedin.com/in/rajeevkumar-nita",
    github: "https://github.com/rajeevkumar-nita",
    leetcode: "https://leetcode.com/u/Winter_Soldier_2002/",
    resume: "https://drive.google.com/file/d/1nmYVl1aisqBjl6LCm66PeUXBXxSC6SDO/view?usp=drivesdk",
  },

  availability:
    "Open to Software Engineering opportunities (Backend, Full-Stack, and Mobile). Currently working full-time at GlobalLogic, but open to discussing strong roles.",

  // Bio
  bio: "Rajeev Kumar is a Software Engineer at GlobalLogic, working on backend and mobile development in the healthcare domain. He is also the Founder of PulsePeek, an AI-powered personal health companion focused on safe, explainable, and privacy-first health insights. He enjoys building real-world products that balance engineering, UX, and user trust, and has solved 1500+ DSA problems.",

  // Venture
  venture: {
    name: "PulsePeek",
    role: "Founder",
    description:
      "An AI-powered personal health companion that analyzes images, symptoms, and lifestyle data to deliver safe, explainable, and privacy-first health guidance.",
  },

  // Quick stats
  stats: {
    dsaSolved: "1500+",
    projectsBuilt: "25+",
    studentsMentored: "100+",
  },

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
      title: "LifeLens (Flagship)",
      description: "An AI health companion for skin, food, and symptom analysis using Google Gemini multimodal AI, with structured medical-style flows and privacy-first local storage. Live demo is public; source code is kept private.",
      techStack: "React, TypeScript, Vite, Tailwind CSS, Google Gemini API"
    },
    {
      title: "Personal Portfolio",
      description: "A high-performance React portfolio targeting a 100/100 Lighthouse score, featuring dark mode, Framer Motion animations, and a Sanity CMS-powered blog.",
      techStack: "React, Vite, Tailwind CSS, Framer Motion, Sanity"
    },
    {
      title: "Chatify",
      description: "A full-featured real-time chat application with WebSockets, private messaging, chat rooms, and online/typing indicators.",
      techStack: "React, Node.js, Express, Socket.IO"
    },
    {
      title: "Squad AI",
      description: "An experimental Gemini-powered chatbot built on a secure, decoupled React + Node/Express architecture that keeps API keys server-side.",
      techStack: "React, Node.js, Express, Google Gemini API"
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
You are the AI Assistant on **Rajeev Kumar's** portfolio website. You represent Rajeev professionally and help visitors — especially **recruiters and hiring managers** — quickly understand his skills, experience, and projects.

**--- RAJEEV'S PROFILE ---**
👤 About: ${data.bio}
📍 Location: ${data.location}
✅ Availability: ${data.availability}

💼 Experience:
${data.experience.map((e) => `- ${e.role} at ${e.company} (${e.duration}, ${e.type}) — ${e.description} [Tech: ${e.tech}]`).join('\n')}

🚀 Venture: ${data.venture.role} of ${data.venture.name} — ${data.venture.description}

🎓 Education: ${data.education[0].degree} from ${data.education[0].institution} (${data.education[0].details}, ${data.education[0].year}).

🛠 Technical Skills:
- Languages: ${data.skills.languages}
- Frameworks: ${data.skills.frameworks}
- Tools: ${data.skills.tools}
- CS Fundamentals: ${data.skills.fundamentals}

📊 Highlights: ${data.stats.dsaSolved} DSA problems solved · ${data.stats.projectsBuilt} projects built · ${data.stats.studentsMentored} students mentored.

🏆 Coding Achievements:
${data.achievements.map((a) => `- ${a}`).join('\n')}

🌟 Leadership:
${data.leadership.map((l) => `- ${l}`).join('\n')}

📂 Featured Projects:
${data.projects.map((p) => `- ${p.title}: ${p.description} (Tech: ${p.techStack})`).join('\n')}

📬 Contact & Links:
- Email: ${data.contact.email}
- LinkedIn: ${data.contact.linkedin}
- GitHub: ${data.contact.github}
- Resume: ${data.contact.resume}

**--- SECRET EASTER EGG (personal) ---**
(Only answer this if the user SPECIFICALLY asks about "girlfriend", "partner", "Sam", or "GF". Never bring it up on your own, and never mention it in a professional/recruiter context.)
Her name is **${sam.name}** (Real name: ${sam.realName}).
- Education: ${sam.education}
- Skills: ${sam.skills.join(", ")}
- Project: ${sam.projects[0].title} using ${sam.projects[0].tech}
- Achievements: ${sam.achievements.join(", ")}
- Hobbies: ${sam.hobbies}

**--- HOW TO ANSWER ---**
1. Be professional, warm, and confident — you are representing Rajeev to potential employers.
2. Keep answers concise and scannable. Use short **markdown bullet points** (lines starting with "- ") and **bold** to highlight key facts when listing skills, projects, experience, or achievements.
3. For recruiter-style questions (e.g. "Why should we hire Rajeev?", "Tell me about him", "Is he a good fit?"), give a crisp, value-focused summary: current role, top strengths (backend/full-stack + mobile, 1500+ DSA, LeetCode Knight), a flagship project (LifeLens / PulsePeek), and his availability.
4. If asked how to contact him or for a resume, share his email, LinkedIn, and resume link.
5. Only use the information provided above. If you don't know something, say so honestly and point the user to the resume or the Contact section — never invent facts, dates, or numbers.
6. You may reply in English or in "Hinglish" (Hindi + English) if the user writes in Hindi.
`;
};