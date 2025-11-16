import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // This function stops the modal from closing when you click inside the content area
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // Overlay
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking the overlay
    >
      {/* Modal Content */}
      <div
        className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={handleModalContentClick} // Stop click propagation
        data-aos="fade-up" // You can even animate the modal
      >
        <div className="p-6 relative">
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 text-2xl"
          >
            <FaTimes />
          </button>

          {/* Title */}
          <h2 className="text-3xl font-bold text-sky-700 dark:text-sky-400 mb-4">
            {project.title}
          </h2>

          {/* Long Description */}
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {project.longDescription}
          </p>

          {/* Features */}
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Key Features
          </h3>
          <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          
          {/* Challenges */}
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Challenges & Learnings
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            {project.challenges}
          </p>

          {/* Tech Stack */}
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="bg-sky-100 dark:bg-slate-700 text-sky-800 dark:text-sky-300 text-sm font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 hover:shadow-md transition duration-300"
            >
              <FaExternalLinkAlt /> View Live Project
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm bg-slate-800 dark:bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-900 dark:hover:bg-slate-600 hover:shadow-md transition duration-300"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectModal;