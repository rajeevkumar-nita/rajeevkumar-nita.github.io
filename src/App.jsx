
import React, { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import ReactGA from "react-ga4"; 

// Keep Critical Components (Above the Fold) as standard imports
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

// Lazy Load Sections (Below the Fold) to reduce initial bundle size
// This fixes "Reduce unused JavaScript"
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Skills = lazy(() => import('./pages/Skills'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Responsibility = lazy(() => import('./pages/Responsibility'));
const Contact = lazy(() => import('./pages/Contact'));
import AiChatWidget from './components/AiChatWidget';

// Initialize GA
ReactGA.initialize("G-0QQ7WH1K3Z");

// A simple loading spinner/placeholder for lazy loaded sections
const SectionLoader = () => (
  <div className="flex items-center justify-center h-40">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: location.pathname + location.search + location.hash 
    });
  }, [location]);

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
      <SEO 
        title="Home"
        description="Portfolio of Rajeev Kumar - A Software Engineer specializing in Full-Stack Web Development (React, Node.js) and Android. Explore my projects, skills, and experience."
        keywords={['Rajeev Kumar', 'Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'Portfolio']}
        url={window.location.href}
      />
      
      <Header />

      <main>
        {/* Home loads instantly (Eager) */}
        <Home id="home" />

        {/* Other sections load in background (Lazy) */}
        <Suspense fallback={<SectionLoader />}>
          <About id="about" />
          <Experience id="experience" />
          <Projects id="projects" />
          <Skills id="skills" />
          <Achievements id="achievements" />
          <Responsibility id="responsibility" />
          <Contact id="contact" />
        </Suspense>
        {/* AI Chat Widget - Lazy Load inside main to avoid blocking initial render */}
        <Suspense fallback={null}>
          <AiChatWidget />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;