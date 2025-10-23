import React from "react";
import { motion } from "framer-motion";
import {
  FaJsSquare, FaReact, FaNode, FaDatabase, FaPython,
  FaJava, FaCss3Alt, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiNextdotjs, SiSocketdotio
} from "react-icons/si";

const iconMap = {
  FaJsSquare, FaReact, FaNode, FaDatabase, FaPython,
  FaJava, FaCss3Alt, FaGitAlt,
  SiTailwindcss, SiRedux, SiNextdotjs, SiSocketdotio
};

const SkillCard = ({ icon, name, level, color, tags = [] }) => {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      className="bg-white p-6 rounded-lg shadow-md border border-sky-100 hover:shadow-xl transition-all transform hover:scale-105"
    >
      <div className="text-center">
        {/* Icon with tooltip aligned right */}
        <div className="mb-4 flex justify-center items-center min-h-[40px]">
          <div className="relative group w-fit flex items-center justify-center">
            {IconComponent ? (
              <IconComponent size={40} className={color} />
            ) : (
              <img
                src={icon}
                alt={name}
                className="w-10 h-10 object-contain"
              />
            )}
            <div className="absolute left-[105%] top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 shadow-lg">
              {name}
            </div>
          </div>
        </div>

        {/* Skill name and level */}
        <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
        <p className="text-sm text-slate-600 mb-2">Proficiency: {level}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 justify-center mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-sky-100 text-sky-800 px-2 py-0.5 text-xs rounded-full font-medium"
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
