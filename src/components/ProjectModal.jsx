import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaLock } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  const [imgError, setImgError] = useState(false);

  // Reset image error state and lock body scroll when a project opens
  useEffect(() => {
    setImgError(false);
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const hasRepo = project?.githubLink && project.githubLink.startsWith('http');
  const isGaming = project?.category === 'gaming';

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {/* Header image / gradient banner */}
            <div className="relative">
              {project.image && !imgError ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  onError={() => setImgError(true)}
                  className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
                />
              ) : (
                <div
                  className={`w-full h-40 sm:h-48 rounded-t-2xl flex items-center justify-center ${
                    isGaming
                      ? 'bg-gradient-to-br from-indigo-500 to-purple-700'
                      : 'bg-gradient-to-br from-sky-500 to-violet-600'
                  }`}
                >
                  <span className="text-6xl font-extrabold text-white/90 font-display drop-shadow">
                    {project.title?.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition text-lg"
              >
                <FaTimes />
              </button>

              {/* Title over image */}
              <h2 className="absolute bottom-4 left-6 right-6 text-3xl font-bold text-white drop-shadow-lg">
                {project.title}
              </h2>
            </div>

            <div className="p-6">
              {/* Long Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 whitespace-pre-line leading-relaxed">
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
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
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
                  className="flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-sky-500 to-violet-500 text-white px-4 py-2.5 rounded-lg hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  <FaExternalLinkAlt /> View Live Project
                </a>
                {hasRepo ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm bg-slate-800 dark:bg-slate-700 text-white px-4 py-2.5 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-600 hover:shadow-md transition duration-300"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                ) : (
                  <span
                    title="Source code is private"
                    className="flex items-center justify-center gap-2 text-sm bg-slate-200 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 px-4 py-2.5 rounded-lg cursor-not-allowed"
                  >
                    <FaLock /> Private Repository
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;