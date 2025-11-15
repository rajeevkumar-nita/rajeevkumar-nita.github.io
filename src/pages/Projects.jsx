import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Renders the Projects section, displaying a grid of ProjectCard components.
 */
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    // Section Container: Added dark mode background gradient and text color
    <section 
      id="projects" 
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800 text-slate-800 dark:text-slate-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title: Added dark mode text color */}
        <h2 
          className="text-4xl font-bold text-sky-700 dark:text-sky-400 mb-12" 
          data-aos="fade-up"
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ProjectCard components will be rendered here. 
              The ProjectCard component itself will also need dark mode styles. */}
          <ProjectCard
            title="Chatify"
            description="A real-time chat application built with React, Node.js, and Socket.IO."
            github="https://github.com/rkrustom/Chatify"
            link="https://chatify-wheat.vercel.app/login"
            aos="fade-up"
            aosDelay="0"
          />
          <ProjectCard
            title="PasteAPP"
            description="Paste, save, and share your code instantly. Built using React + Firebase."
            github="https://github.com/rkrustom/PasteAPP"
            link="https://paste-app-nine-ruddy.vercel.app/"
            aos="fade-up"
            aosDelay="200"
          />
          <ProjectCard
            title="Password Generator"
            description="Create secure passwords with custom options. Built with Vanilla JS."
            github="https://github.com/rkrustom/password-generator"
            link="https://password-generator-rkrustom.vercel.app/"
            aos="fade-up"
            aosDelay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;