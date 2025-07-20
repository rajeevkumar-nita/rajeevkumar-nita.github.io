import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, github, link, aos, aosDelay }) => (
  <div
    className="bg-white p-6 rounded-xl shadow-md border border-sky-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    data-aos={aos}
    data-aos-delay={aosDelay}
  >
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <p className="mt-2 text-slate-600">{description}</p>
    <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
      
      {/* View Project Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 hover:shadow-md transition duration-300"
      >
        <FaExternalLinkAlt /> View Project
      </a>

      {/* GitHub Button */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-900 hover:shadow-md transition duration-300"
      >
        <FaGithub /> GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;
