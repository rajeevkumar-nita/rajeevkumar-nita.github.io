import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle, FaLock, FaStar } from "react-icons/fa";

// Large, image-led hero card for the flagship project
const FeaturedProject = ({ project, onViewDetails }) => {
  const [imgError, setImgError] = useState(false);
  if (!project) return null;

  const hasRepo = project.githubLink && project.githubLink.startsWith("http");

  return (
    <div
      className="group relative grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden mb-16 text-left
                 border border-sky-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-card hover:shadow-glow transition-all duration-500"
      data-aos="fade-up"
    >
      {/* Media */}
      <div className="relative overflow-hidden min-h-[240px] md:min-h-[360px]">
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500 to-violet-600">
            <span className="text-7xl font-extrabold text-white/90 font-display drop-shadow">
              {project.title?.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-yellow-400 text-black shadow">
          <FaStar /> Featured Project
        </span>
      </div>

      {/* Content */}
      <div className="p-7 sm:p-9 flex flex-col justify-center">
        <span className="section-eyebrow self-start">Flagship Build</span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-full font-medium bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg border border-sky-600 dark:border-sky-400 text-sky-700 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-slate-700 transition"
          >
            <FaInfoCircle /> Case Study
          </button>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 text-white hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
          {hasRepo ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-900 dark:hover:bg-slate-600 transition"
            >
              <FaGithub /> Code
            </a>
          ) : (
            <span
              title="Source code is private"
              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-lg bg-slate-200 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400 cursor-not-allowed"
            >
              <FaLock /> Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
