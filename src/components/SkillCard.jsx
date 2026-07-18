
import React from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare, FaReact, FaNode, FaDatabase, FaPython,
  FaJava, FaCss3Alt, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiNextdotjs, SiSocketdotio
} from "react-icons/si";

// Icon mapping...
const iconMap = {
  FaJsSquare, FaReact, FaNode, FaDatabase, FaPython,
  FaJava, FaCss3Alt, FaGitAlt,
  SiTailwindcss, SiRedux, SiNextdotjs, SiSocketdotio
};

const SkillCard = ({ icon, name, level, color, tags = [] }) => {
  const IconComponent = iconMap[icon];

  // Map proficiency level to a percentage for the progress bar
  const levelMap = {
    Beginner: 40,
    Intermediate: 65,
    Advanced: 85,
    Expert: 100,
  };
  const levelPercent = levelMap[level] ?? 60;

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      // Card Container
      className="group relative overflow-hidden bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-card border border-sky-100 dark:border-slate-600 hover:shadow-glow transition-all transform hover:scale-105 hover:-translate-y-1"
    >
      {/* Hover glow accent */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />

      <div className="relative z-10 text-center">
        <div className="mb-4 flex justify-center items-center min-h-[40px]">
          <div className="relative group/icon w-fit flex items-center justify-center">
            {IconComponent ? (
              <IconComponent size={40} className={color} />
            ) : (
              <img
                src={icon}
                alt={name}
                className="w-10 h-10 object-contain"
              />
            )}
            {/* Tooltip */}
            <div className="absolute left-[105%] top-1/2 -translate-y-1/2 px-2 py-1 bg-black dark:bg-slate-900 text-white dark:text-slate-200 text-xs rounded opacity-0 group-hover/icon:opacity-100 whitespace-nowrap z-50 shadow-lg">
              {name}
            </div>
          </div>
        </div>

        {/* Skill name: High contrast */}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</h3>
        
        {/* Skill level */}
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">{level}</p>

        {/* Proficiency progress bar */}
        <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-600 overflow-hidden mb-3">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
            style={{ width: `${levelPercent}%` }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 px-2 py-0.5 text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;