import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiRedux,
  SiSocketdotio,
  SiExpress,
  SiSpring,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact />, color: "text-sky-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-slate-100" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
  { name: "Express", icon: <SiExpress />, color: "text-slate-200" },
  { name: "Spring Boot", icon: <SiSpring />, color: "text-green-500" },
  { name: "Java", icon: <FaJava />, color: "text-red-400" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
  { name: "Socket.IO", icon: <SiSocketdotio />, color: "text-slate-100" },
  { name: "Vite", icon: <SiVite />, color: "text-violet-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
];

const TechMarquee = () => {
  // Duplicate the list so the -50% translate loops seamlessly
  const loop = [...techs, ...techs];

  return (
    <section
      aria-label="Technologies I work with"
      className="relative bg-slate-950 py-8 overflow-hidden border-y border-white/5"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />

      <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
        {loop.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-slate-300 whitespace-nowrap"
          >
            <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
            <span className="text-sm font-medium font-display">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
