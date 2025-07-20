import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-sky-700 mb-12" data-aos="fade-up">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Chatify"
            description="A real-time chat application built with React, Node.js, and Socket.IO."
            github="https://github.com/rkrustom/Chatify"
            link="https://github.com/rkrustom/Chatify"
            aos="fade-up"
            aosDelay="0"
          />
          <ProjectCard
            title="PasteAPP"
            description="Paste, save, and share your code instantly. Built using React + Firebase."
            github="https://github.com/rkrustom/PasteAPP"
            link="https://github.com/rkrustom/PasteAPP"
            aos="fade-up"
            aosDelay="200"
          />
          <ProjectCard
            title="Password Generator"
            description="Create secure passwords with custom options. Built with Vanilla JS."
            github="https://github.com/rkrustom/password-generator"
            link="https://github.com/rkrustom/password-generator"
            aos="fade-up"
            aosDelay="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
