import React from 'react';
import { Link } from 'react-scroll';  
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



const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <div>
        <Home id="home" />
        <About id="about"/>
        {/* <Education id="education" /> */}
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
