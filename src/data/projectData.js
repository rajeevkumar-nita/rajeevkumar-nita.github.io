// src/data/projectData.js

export const projects = [
  {
    id: 9,
    category: "development",
    featured: true,

    title: "SarasTech",

    shortDescription:
      "AI teaching assistant for Indian teachers — lesson plans, worksheets & quizzes in English or regional languages.",
    githubLink: "Private Repository (Code not public)",
    liveLink: "https://www.sarastech.co.in/",
    image: "/assets/projects/sarastech-banner.png",
    imageFit: "contain", // wide banner: show it whole instead of cropping

    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "SarasTech is an AI teaching assistant built for teachers in India and the first product from Silver Tide Tech. It helps teachers prepare for class in minutes. They can generate lesson plans, worksheets, quizzes, exit tickets, homework and question papers by grade, subject, topic and difficulty, complete with answer keys and ready to print. They can also ask an AI Classroom Coach, powered by Google Gemini, for grade- and subject-specific help with concepts, classroom behaviour and activity ideas.\n\nThe product is built for how Indian classrooms actually run, including single-teacher, multi-grade, mixed-ability and large classes. Teachers can get answers in English, Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Odia and Hinglish. Generated material opens in a built-in editor, can be saved to a personal Teaching Resource Library tied to the teacher's account, and can be exported as PDF. Class lists and daily attendance sit alongside the teaching materials. SarasTech is live on the web today, and an Android app is coming soon.",

    techStack: [
      "React",
      "Vite",
      "Google Gemini API",
      "Vercel (Deployment)",
    ],

    challenges:
      "Designing for real Indian classrooms (multi-grade, mixed-ability and large classes), delivering useful answers across many regional languages and Hinglish, and keeping AI output trustworthy by presenting it as an editable draft with answer keys that teachers review before use.",

    features: [
      "AI Classroom Coach for grade- and subject-specific guidance",
      "Lesson plan, worksheet, quiz and question paper generator with answer keys",
      "Answers in English, 8 Indian languages and Hinglish",
      "Teaching Resource Library with built-in editor and PDF export",
      "Voice input and read-aloud answers (browser-dependent)",
      "Class lists and daily attendance tools",
      "Live on the web — Android app coming soon"
    ]
  },
  {
    id: 10,
    category: "development",
    featured: true,

    title: "Silver Tide Tech",

    shortDescription:
      "Product-led technology company I co-founded — building technology that empowers people.",
    githubLink: "Private Repository (Code not public)",
    liveLink: "https://silvertidetech.vercel.app/",
    image: "/assets/projects/silvertidetech.png",
    imageFit: "contain", // wide logo: show it whole instead of cropping

    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "Silver Tide Tech is a product-led technology and innovation company that I co-founded and serve as a Director of, alongside four other founders. Its tagline is \"Building Technology. Empowering People.\" It builds technology products, digital platforms and solutions to solve real-world problems, with a vision to create technology that makes people's lives, work and opportunities better.\n\nEducation is the company's first major vertical, starting with SarasTech, an AI teaching assistant that is available now for teachers. The company plans to expand into an AI platform for students, online learning with human teachers, and physical learning centres. It also plans Technology & Consulting Services, covering web, mobile, AI and automation, cloud and backend engineering, and technology consulting. These planned offerings have not launched yet.",

    techStack: [
      "Astro",
      "Vercel (Deployment)",
      "Product Strategy",
    ],

    challenges:
      "Turning a broad mission into a focused first product, launching SarasTech before expanding the education vertical, and building a company roadmap that grows from products into technology and consulting services.",

    features: [
      "Product-led technology and innovation company",
      "First product live: SarasTech, an AI Teaching Assistant",
      "Education as the first major vertical",
      "Planned: AI platform for students, online learning and learning centres",
      "Planned: Technology & Consulting Services (not launched yet)",
      "Co-founded by a team of five Founders & Directors"
    ]
  },
  {
    id: 1,
    category: "development",
    featured: true,

    title: "PulsePeek",

    shortDescription:
      "AI-powered personal health companion for skin, food & symptom analysis via images.",
    githubLink: "Private Repository (Code not public)",
    liveLink: "https://life-lens-iota.vercel.app",
    image: "/assets/projects/pulsepeek.png",
    imageFit: "contain", // wide logo: show it whole instead of cropping

    aos: "fade-up",
    aosDelay: "0",

    longDescription:
      "PulsePeek is an AI-powered personal health companion built using modern frontend technologies and Gemini multimodal AI. The platform allows users to analyze skin conditions, food items, and general health symptoms using images and text inputs, and offers non-diagnostic guidance rather than a medical diagnosis. Unlike generic AI chat tools, PulsePeek provides a structured, medical-style experience with dedicated flows such as skin zone mapping, symptom tracking, multi-image comparison, and personalized treatment planning.\n\nThe project was built to solve the problem of unstructured and unreliable health advice found online. PulsePeek focuses on guided analysis, contextual understanding, and consistent UI-driven workflows. Medical profiles are stored locally on the user’s device to personalize responses while maintaining privacy. The application is optimized for both desktop and mobile experiences and is deployed publicly for live demonstration, while the source code is intentionally kept private to protect intellectual property.",

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
    image: "/assets/projects/portfolio.jpeg",
    imagePosition: "center 20%", // keep the face in frame when cropped
    
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
    image: "/assets/projects/chatify.png",
    imageFit: "contain", // wide logo: show it whole instead of cropping
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
    image: "/assets/projects/squad-ai.png",
    imageFit: "contain", // wide logo: show it whole instead of cropping
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

  /* PasteAPP and Password Generator — temporarily hidden. Remove this comment wrapper to re-enable.
  {
    id: 5,
    category: "development",
    title: "PasteAPP",
    shortDescription: "Paste, save, and share your code instantly. Built using React + Firebase.",
    githubLink: "https://github.com/rkrustom/PasteAPP",
    liveLink: "https://paste-app-nine-ruddy.vercel.app/",
    image: "/assets/projects/pasteapp.png",
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
    image: "/assets/projects/password-generator.png",
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
  */

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
    image: "/assets/projects/sync-hearts.png",
    imageFit: "contain", // wide banner: show it whole instead of cropping
    
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
    image: "/assets/projects/neon-asteroids.png",
    imageFit: "contain", // wide banner: show it whole instead of cropping

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