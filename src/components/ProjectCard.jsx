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
        relative p-6 rounded-xl shadow-md border transform transition-all duration-300 
        hover:scale-105 hover:shadow-xl flex flex-col justify-between
        ${
          isGaming
            ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-purple-400"
            : "bg-white dark:bg-slate-800 border-sky-100 dark:border-slate-700"
        }
      `}
      data-aos={project.aos}
      data-aos-delay={project.aosDelay}
    >
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

      <div>
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

      <div className="mt-5 flex flex-col space-y-3">
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
