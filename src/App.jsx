// import React from 'react';
// import { Link } from 'react-scroll';  
// import Header from './components/Header';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Education from './pages/Education';
// import Responsibility from './pages/Responsibility';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import Achievements from './pages/Achievements';
// import About from "./pages/About";
// import Experience from "./pages/Experience";




// const App = () => {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header Section */}
//       <Header />

//       {/* Main Content */}
//       <div>
//         <Home id="home" />
//         <About id="about"/>
//         {/* <Education id="education" /> */}
//          <Experience id="experience" />
//         <Projects id="projects" />
//         <Skills id="skills" />

//         <Achievements id="achievements" />
//         <Responsibility id="responsibility" />
//         <Contact id="contact" />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;




// import React, { useEffect } from 'react'; // 1. useEffect IMPORT KARO
// import { useLocation } from 'react-router-dom'; // 2. useLocation IMPORT KARO
// // import { Link } from 'react-scroll'; // Iski zaroorat ab yahaan nahi hai
// import Header from './components/Header';
// import Home from './pages/Home';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Education from './pages/Education';
// import Responsibility from './pages/Responsibility';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import Achievements from './pages/Achievements';
// import About from "./pages/About"; 
// import Experience from "./pages/Experience";
// import ReactGA from "react-ga4"; //for Google Analytics

// const App = () => {
//   // 3. useLocation ko setup karo
//   const location = useLocation();

//   // 4. YEH POORA NAYA LOGIC ADD KARO
//   useEffect(() => {
//     // Check karo ki URL mein hash hai ya nahi
//     if (location.hash) {
//       const id = location.hash.replace('#', ''); // Hash se '#' ko hatao
      
//       // Thoda sa delay do (e.g., 100ms) taaki component render ho jaaye
//       setTimeout(() => {
//         const element = document.getElementById(id);
//         if (element) {
//           // Element tak scroll karo
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100); // 100ms ka delay
//     }
//   }, [location]); // Yeh useEffect tabhi chalega jab 'location' change hogi

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Header Section */}
//       <Header />

//       {/* Main Content */}
//       {/* Aapke components mein 'id' prop pehle se hi hai, jo zaroori hai */}
//       <div>
//         <Home id="home" />
//         <About id="about" />
//         {/* <Education id="education" /> */}
//         <Experience id="experience" />
//         <Projects id="projects" />
//         <Skills id="skills" />
//         <Achievements id="achievements" />
//         <Responsibility id="responsibility" />
//         <Contact id="contact" />
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default App;





import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4"; // Google Analytics Import

// Components Import
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Responsibility from './pages/Responsibility';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Achievements from './pages/Achievements';
import About from "./pages/About"; 
import Experience from "./pages/Experience";

// 1. Google Analytics Initialize (Tumhari ID ke saath)
ReactGA.initialize("G-0QQ7WH1K3Z");

const App = () => {
  const location = useLocation();

  // 2. ANALYTICS TRACKING LOGIC (Ye naya hai)
  useEffect(() => {
    // Ye Google ko batayega ki user kaunse page ya section (#) par hai
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search + location.hash 
    });
  }, [location]);

  // 3. SCROLL LOGIC (Ye tumhara purana logic hai)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div>
        <Home id="home" />
        <About id="about" />
        {/* <Education id="education" /> */}
        <Experience id="experience" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Achievements id="achievements" />
        <Responsibility id="responsibility" />
        <Contact id="contact" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;