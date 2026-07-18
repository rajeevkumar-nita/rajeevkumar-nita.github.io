import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaStar,
  FaLock,
} from "react-icons/fa";

// Image with graceful gradient fallback when the screenshot is missing
const ProjectThumb = ({ src, title, isGaming }) => {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    return (
      <div
        className={`flex items-center justify-center w-full h-44 ${
          isGaming
            ? "bg-gradient-to-br from-indigo-500 to-purple-700"
            : "bg-gradient-to-br from-sky-500 to-violet-600"
        }`}
      >
        <span className="text-5xl font-extrabold text-white/90 font-display drop-shadow">
          {title?.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${title} preview`}
      loading="lazy"
      onError={() => setErrored(true)}
      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
    />
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  const isGaming = project.category === "gaming";
  const isFeatured = project.featured;
  const hasRepo = project.githubLink && project.githubLink.startsWith("http");

  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.15}
      glareColor="#a5b4fc"
      glarePosition="all"
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      scale={1.02}
      transitionSpeed={1500}
      className="h-full"
    >
      <div
        className={`
          group relative rounded-2xl shadow-card border transform transition-all duration-300 
          hover:shadow-glow flex flex-col justify-between overflow-hidden h-full
          ${
            isGaming
              ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-purple-400/50"
              : "bg-white dark:bg-slate-800 border-sky-100 dark:border-slate-700"
          }
        `}
        data-aos={project.aos}
        data-aos-delay={project.aosDelay}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <ProjectThumb src={project.image} title={project.title} isGaming={isGaming} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {/* ⭐ FEATURED BADGE */}
          {isFeatured && (
            <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full shadow bg-yellow-400 text-black">
              <FaStar className="text-sm" /> Featured
            </span>
          )}

          {/* 🎮 Gaming Badge */}
          {isGaming && (
            <span className="absolute top-3 left-3 text-xs font-semibold bg-black/40 backdrop-blur px-3 py-1 rounded-full">
              🎮 Gaming
            </span>
          )}
        </div>

        <div className="relative z-10 p-6 flex flex-col flex-1">
          {/* Title */}
          <h3
            className={`text-xl font-bold mb-1 ${
              isGaming ? "text-white" : "text-slate-900 dark:text-slate-100"
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-1 leading-relaxed text-sm ${
              isGaming ? "text-indigo-100" : "text-slate-700 dark:text-slate-300"
            }`}
          >
            {project.shortDescription}
          </p>

          {/* Tech chips */}
          {project.techStack?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    isGaming
                      ? "bg-white/15 text-white"
                      : "bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-col space-y-3">
            <button
              onClick={onViewDetails}
              className={`flex items-center justify-center gap-2 text-sm border px-4 py-2 rounded-lg transition
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
                className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg transition
                  ${
                    isGaming
                      ? "bg-black/30 hover:bg-black/40"
                      : "bg-sky-600 hover:bg-sky-700 text-white"
                  }
                `}
              >
                <FaExternalLinkAlt /> View Project
              </a>

              {hasRepo ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg transition
                    ${
                      isGaming
                        ? "bg-black/40 hover:bg-black/60"
                        : "bg-slate-800 dark:bg-slate-700 hover:bg-slate-900 dark:hover:bg-slate-600 text-white"
                    }
                  `}
                >
                  <FaGithub /> GitHub
                </a>
              ) : (
                <span
                  title="Source code is private"
                  className={`flex-1 flex items-center justify-center gap-2 text-sm px-4 py-2 rounded-lg cursor-not-allowed
                    ${
                      isGaming
                        ? "bg-black/20 text-white/70"
                        : "bg-slate-200 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400"
                    }
                  `}
                >
                  <FaLock /> Private
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
