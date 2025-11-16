export const projects = [
  {
    id: 1,
    title: "Chatify",
    // This is your original description
    shortDescription: "A real-time chat application built with React, Node.js, and Socket.IO.",
    githubLink: "https://github.com/rkrustom/Chatify",
    liveLink: "https://chatify-wheat.vercel.app/login",
    aos: "fade-up",
    aosDelay: "0",
    
    // --- NEW CASE STUDY CONTENT ---
    longDescription: "This project is a full-featured, real-time chat application built from scratch. The primary goal was to learn and master WebSockets for instantaneous, bi-directional communication between the client and server.",
    techStack: ["React", "Node.js", "Express", "Socket.IO", "Tailwind CSS"],
    challenges: "The most significant challenge was managing user state (online/offline, typing) and socket connections reliably. Handling user disconnection and ensuring messages were delivered to the correct rooms required careful state management on the server.",
    features: [
      "Real-time messaging with WebSockets",
      "User-to-user private messaging",
      "Public chat rooms based on topics",
      "User online status and typing indicators",
    ]
  },
  {
    id: 2,
    title: "PasteAPP",
    shortDescription: "Paste, save, and share your code instantly. Built using React + Firebase.",
    githubLink: "https://github.com/rkrustom/PasteAPP",
    liveLink: "https://paste-app-nine-ruddy.vercel.app/",
    aos: "fade-up",
    aosDelay: "200",
    
    // --- NEW CASE STUDY CONTENT ---
    longDescription: "PasteAPP is a code-sharing tool inspired by Pastebin. It was built with a 'serverless'-first approach, leveraging Firebase for authentication, database, and hosting. This allowed me to focus on the front-end experience and rapid feature development.",
    techStack: ["React", "Firebase", "Firestore", "Firebase Auth", "React Router"],
    challenges: "Implementing secure and efficient data handling with Firestore rules was a new challenge. Another was creating a clean, dynamic routing system where each new 'paste' gets a unique, shareable URL.",
    features: [
      "Instant code sharing with unique URLs",
      "Firebase authentication to save/manage pastes",
      "Firestore backend for scalable data storage",
      "Responsive UI for all device sizes",
    ]
  },
  {
    id: 3,
    title: "Password Generator",
    shortDescription: "Create secure passwords with custom options. Built with Vanilla JS.",
    githubLink: "https://github.com/rkrustom/password-generator",
    liveLink: "https://password-generator-rkrustom.vercel.app/",
    aos: "fade-up",
    aosDelay: "400",
    
    // --- NEW CASE STUDY CONTENT ---
    longDescription: "A straightforward, client-side tool to generate strong, secure, and customizable passwords. This was a fundamental project to practice and solidify my understanding of Vanilla JavaScript, DOM manipulation, and event handling.",
    techStack: ["HTML", "CSS", "Vanilla JavaScript"],
    challenges: "The main challenge was managing the UI state and password-generation logic. Ensuring that all user-selected criteria (length, include numbers, include symbols) worked together correctly and produced a secure, random password was a great logic puzzle.",
    features: [
      "Custom password length slider",
      "Toggleable options for (uppercase, lowercase, numbers, symbols)",
      "One-click 'Copy to Clipboard' functionality",
      "Password strength indicator (visual feedback)",
    ]
  }
];