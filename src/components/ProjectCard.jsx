import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaStar,
} from "react-icons/fa";

const ProjectCard = ({ project, onViewDetails }) => {
  const isGaming = project.category === "gaming";
  const isFeatured = project.featured;

  return (
    <div
      className={`
        group relative p-6 rounded-2xl shadow-card border transform transition-all duration-300 
        hover:scale-[1.03] hover:-translate-y-1 hover:shadow-glow flex flex-col justify-between overflow-hidden
        ${
          isGaming
            ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-purple-400/50"
            : "bg-white dark:bg-slate-800 border-sky-100 dark:border-slate-700"
        }
      `}
      data-aos={project.aos}
      data-aos-delay={project.aosDelay}
    >
      {/* Hover glow accent */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />

      {/* ⭐ FEATURED BADGE */}
      {isFeatured && (
        <span
          className={`absolute top-4 left-4 flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full shadow
            ${
              isGaming
                ? "bg-yellow-400 text-black"
                : "bg-sky-600 text-white"
            }
          `}
        >
          <FaStar className="text-sm" /> 
        </span>
      )}

      <div className="relative z-10">
        {/* 🎮 Gaming Badge */}
        {isGaming && (
          <span className="inline-block mb-2 text-xs font-semibold bg-black/30 px-3 py-1 rounded-full">
            🎮 Gaming Project
          </span>
        )}

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-1 ${
            isGaming
              ? "text-white"
              : "text-slate-900 dark:text-slate-100"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`mt-2 leading-relaxed ${
            isGaming
              ? "text-indigo-100"
              : "text-slate-700 dark:text-slate-300"
          }`}
        >
          {project.shortDescription}
        </p>
      </div>

      <div className="relative z-10 mt-5 flex flex-col space-y-3">
        <button
          onClick={onViewDetails}
          className={`flex items-center justify-center gap-2 text-sm border px-4 py-2 rounded-md transition
            ${
              isGaming
                ? "border-white/60 hover:bg-white/20"
                : "text-sky-700 dark:text-sky-400 border-sky-600 dark:border-sky-400 hover:bg-sky-100 dark:hover:bg-slate-700"
            }
          `}
        >
          <FaInfoCircle /> View Details
        </button>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-md transition
              ${
                isGaming
                  ? "bg-black/30 hover:bg-black/40"
                  : "bg-sky-600 hover:bg-sky-700 text-white"
              }
            `}
          >
            <FaExternalLinkAlt /> View Project
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-md transition
              ${
                isGaming
                  ? "bg-black/40 hover:bg-black/60"
                  : "bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white"
              }
            `}
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
