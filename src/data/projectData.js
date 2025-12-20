// src/data/projectData.js

export const projects = [
  {
    id: 1,
    category: "development",
    featured: true,

    title: "LifeLens",

    shortDescription:
      "AI health companion for skin, food & symptom analysis via images.",
    githubLink: "Private Repository (Code not public)",
    liveLink: "https://life-lens-iota.vercel.app",

    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "LifeLens is an AI-powered personal health companion built using modern frontend technologies and Gemini multimodal AI. The platform allows users to analyze skin conditions, food items, and general health symptoms using images and text inputs. Unlike generic AI chat tools, LifeLens provides a structured, medical-style experience with dedicated flows such as skin zone mapping, symptom tracking, multi-image comparison, and personalized treatment planning.\n\nThe project was built to solve the problem of unstructured and unreliable health advice found online. LifeLens focuses on guided analysis, contextual understanding, and consistent UI-driven workflows. Medical profiles are stored locally on the user’s device to personalize responses while maintaining privacy. The application is optimized for both desktop and mobile experiences and is deployed publicly for live demonstration, while the source code is intentionally kept private to protect intellectual property.",

    techStack: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Google Gemini API (Multimodal)",
      "LocalStorage for persistence",
      "Vercel (Deployment)",
      "Render (Deployment)",
    ],

    challenges:
      "Handling multimodal AI responses reliably, managing API rate limits, ensuring accurate image-based analysis, maintaining privacy with local-only data storage, and building a consistent UX across mobile and desktop devices.",

    features: [
      "Image-based skin analysis with zone mapping",
      "Multi-image symptom comparison",
      "Personalized medical profile stored locally",
      "Symptom tracker with history",
      "Treatment planner with AI-generated guidance",
      "Dark mode by default with responsive UI",
      "Live deployment with protected source code"
    ]
  },
   {
    id: 2,
    category: "development",
    featured: true,
    title: "Personal Portfolio",
    
    shortDescription: 
      "A high-performance React portfolio with dark mode and SEO optimization.",
    
    githubLink: "https://github.com/rajeevkumar-nita", // Yahan apna repo link update karein
    liveLink: "https://rajeev-portfolio-delta.vercel.app/",
    
    aos: "fade-up",
    aosDelay: "0",
    
    longDescription: 
      "Designed and developed a personal portfolio to showcase my skills and projects. The main goal was to achieve a perfect 100/100 Lighthouse score for Performance, Accessibility, and SEO. It features a modern UI with Dark/Light mode, smooth animations using Framer Motion/AOS, and a dynamic blog section powered by Sanity CMS.",
    
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Sanity.io",
      "Formspree"
    ],
    
    challenges: 
      "The main challenge was optimizing the performance to hit a 100 Lighthouse score. I handled this by implementing lazy loading for components (React.lazy), optimizing images (WebP conversion), and using code splitting in Vite to reduce the initial bundle size.",
    
    features: [
      "Dark & Light Mode Toggle",
      "Lazy Loading & Code Splitting",
      "Fully Responsive Design",
      "Integrated Contact Form (Formspree)",
      "SEO Optimized Metadata"
    ]
  },
  {
    id: 3,
    category: "development",
    featured: true, 
    title: "Chatify",
    shortDescription: "A real-time chat application built with React, Node.js, and Socket.IO.",
    githubLink: "https://github.com/rkrustom/Chatify",
    liveLink: "https://chatify-wheat.vercel.app/login",
    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "This project is a full-featured, real-time chat application built from scratch. The primary goal was to learn and master WebSockets for instantaneous, bi-directional communication between the client and server.",

    techStack: ["React", "Node.js", "Express", "Socket.IO", "Tailwind CSS"],

    challenges:
      "Managing user state (online/offline, typing indicators) and handling socket disconnections reliably was the biggest challenge.",

    features: [
      "Real-time messaging with WebSockets",
      "User-to-user private messaging",
      "Public chat rooms",
      "Online status & typing indicators",
      "Render & Vercel deployment"
    ],
  },
  {
    id: 4,
    category: "development",
    featured: false,
    title: "Squad AI",
    shortDescription: "A Fun AI chatbot with Google Gemini integration.",
    githubLink: "https://github.com/rajeevkumar-nita/squad-ai",
    liveLink: "https://squad-ai-gamma.vercel.app", 
    aos: "fade-up",
    aosDelay: "0",
    longDescription:
"Squad AI is a fun, experimental chatbot application built to demonstrate how Large Language Models (LLMs) can be integrated into modern web applications. The project follows a decoupled architecture where a React-based frontend communicates with a secure Node.js and Express backend, which fetches responses from Google’s Gemini API, ensuring that API keys are never exposed on the client side. What makes this project unique is that it was created purely for fun and experimentation, and the chatbot is humorously trained on fictional and funny information related to college friends — Rajeev, Sachin, Devashu, Anuj, Gaurav, Zamiul, and Nand. The project focuses more on learning system design, API security, and LLM integration rather than production use cases.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Render & Vercel"
    ],
    challenges:
      "Handling CORS issues between the Vercel-hosted frontend and Render-hosted backend was the main challenge. I implemented secure middleware in Express to allow cross-origin requests specifically from my frontend domain.",
    features: [
      "Real-time AI Responses",
      "Secure Backend API Handling",
      "Google Gemini Pro Integration",
      "Responsive Chat Interface"
    ]
  },

  {
    id: 5,
    category: "development",
    title: "PasteAPP",
    shortDescription: "Paste, save, and share your code instantly. Built using React + Firebase.",
    githubLink: "https://github.com/rkrustom/PasteAPP",
    liveLink: "https://paste-app-nine-ruddy.vercel.app/",
    aos: "fade-up",
    aosDelay: "200",

    longDescription:
      "PasteAPP is a code-sharing platform inspired by Pastebin. It uses Firebase for authentication, database, and hosting.",

    techStack: ["React", "Firebase", "Firestore", "Firebase Auth"],

    challenges:
      "Designing secure Firestore rules and implementing dynamic routing for unique paste URLs.",

    features: [
      "Instant code sharing with unique URLs",
      "Firebase authentication",
      "Secure Firestore backend",
      "Responsive UI",
    ],
  },

  {
    id: 6,
    category: "development",
    title: "Password Generator",
    shortDescription: "Create secure passwords with custom options. Built with Vanilla JS.",
    githubLink: "https://github.com/rkrustom/password-generator",
    liveLink: "https://password-generator-rkrustom.vercel.app/",
    aos: "fade-up",
    aosDelay: "400",

    longDescription:
      "A client-side password generator to practice JavaScript logic, DOM manipulation, and event handling.",

    techStack: ["HTML", "CSS", "JavaScript"],

    challenges:
      "Handling password rules correctly and giving instant UI feedback based on strength.",

    features: [
      "Custom password length",
      "Include/exclude symbols & numbers",
      "Copy to clipboard",
      "Password strength indicator",
    ],
  },

  // GAMING PROJECT
  {
    id: 7, 
    category: "gaming",
    featured: true,
    title: "Sync Hearts",
    
    shortDescription: 
      "A real-time asymmetric co-op game for couples. Test your trust with Voice Chat & Procedural Mazes.",
    
    githubLink: "https://github.com/rajeevkumar-nita/couple-game",
    liveLink: "https://couple-game.vercel.app/",
    
    aos: "fade-up",
    aosDelay: "0",
    
    longDescription: 
      "Sync Hearts is a real-time multiplayer cooperative game designed to test communication and trust. It features asymmetric gameplay where one player (The Walker) navigates a dark maze with limited vision, while the other (The Watcher) guides them using a full map. The game includes a complex backend for state synchronization, procedural level generation, and a 'Chaos System' that randomizes difficulty dynamically.",
    
    techStack: [
      "React.js (Vite)",
      "Node.js & Express",
      "Socket.io (Real-Time)",
      "WebRTC (Voice Chat)",
      "Tailwind CSS"
    ],
    
    challenges: 
      "The main challenge was handling real-time state synchronization (latency) between two clients to ensure smooth movement and trap detection. Integrating WebRTC for voice chat alongside Socket.io without overloading the server was also complex. Additionally, implementing a procedural maze algorithm that guarantees a solvable path with Keys & Doors required advanced logic.",
    
    features: [
      "Real-Time Multiplayer (Socket.io)",
      "Built-in Voice Chat (WebRTC)",
      "Procedural Maze Generation",
      "Dynamic 'Chaos' Curses (Mirror/Speed)",
      "Shareable Game Report Card"
    ]
  },
  {
    id: 8,
    category: "gaming",
    featured: true, 
    title: "Neon Asteroids PvP",
    
    shortDescription:
      "A real-time multiplayer space shooter game featuring 3D neon graphics, custom physics, and cross-device support.",

    githubLink: "https://github.com/rajeevkumar-nita/asteroid-game",
    liveLink: "https://asteroid-game-qlqp.onrender.com",

    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "Neon Asteroids PvP is a high-octane multiplayer arcade game built from scratch using Node.js and Socket.io. The goal was to create a lag-free, real-time competitive experience where players can create private lobbies and battle friends. It features a custom-built game engine on HTML5 Canvas that handles collision detection, momentum physics, and procedural rendering without relying on heavy game libraries.",

    techStack: [
      "Node.js",
      "Socket.io",
      "HTML5 Canvas",
      "Vanilla JavaScript",
      "CSS3 (Glassmorphism)",
      "Render (Deployment)"
    ],

    challenges:
      "The biggest challenge was handling real-time state synchronization between the server and multiple clients to prevent lag. I optimized the game loop to run at 60 FPS on the server. Another major hurdle was creating a responsive mobile control scheme (touch d-pad) that worked seamlessly alongside desktop keyboard inputs, which required custom touch-event handling logic.",

    features: [
      "Real-time Multiplayer (Socket.io)",
      "Cross-Platform (Mobile & Laptop)",
      "Lobby System with Join Codes",
      "Procedural 3D Neon Graphics & Audio"
    ]
  }
];