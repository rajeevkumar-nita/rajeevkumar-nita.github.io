import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillCard from "../components/SkillCard";

const allSkills = {
  "Programming Languages": [
    { name: "C", level: "Intermediate", icon: "/assets/c-logo.svg", tags: ["Low-level", "Procedural"] },
    { name: "C++", level: "Expert", icon: "/assets/c++-logo.svg", tags: ["OOP", "STL"] },
    { name: "JavaScript", level: "Expert", icon: "FaJsSquare", color: "text-yellow-500", tags: ["Frontend", "Logic"] },
    { name: "SQL", level: "Advanced", icon: "FaDatabase", color: "text-blue-700", tags: ["Queries", "RDBMS"] },
    { name: "Java", level: "Intermediate", icon: "FaJava", color: "text-red-600", tags: ["Backend", "OOP"] },
    { name: "Python", level: "Intermediate", icon: "FaPython", color: "text-yellow-500", tags: ["Scripting", "ML"] },
  ],
  "Technologies": [
    { name: "HTML5", level: "Expert", icon: "FaCss3Alt", color: "text-orange-600", tags: ["Markup"] },
    { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "text-blue-500", tags: ["Utility", "Design"] },
    { name: "React.js", level: "Expert", icon: "FaReact", color: "text-blue-600", tags: ["Hooks", "SPA"] },
    { name: "Next.js", level: "Intermediate", icon: "SiNextdotjs", color: "text-black", tags: ["SSR", "Routing"] },
    { name: "Node.js", level: "Intermediate", icon: "FaNode", color: "text-green-600", tags: ["Server", "Express"] },
    { name: "MongoDB", level: "Intermediate", icon: "/assets/mongodb-logo.svg", tags: ["NoSQL", "Database"] },
    { name: "Redux", level: "Advanced", icon: "SiRedux", color: "text-purple-600", tags: ["State", "Middleware"] },
    { name: "Express.js", level: "Intermediate", icon: "/assets/express-logo.svg", tags: ["Routing", "API"] },
    { name: "Socket.IO", level: "Intermediate", icon: "SiSocketdotio", color: "text-black", tags: ["WebSockets", "Real-time"] }
  ],
  "Other Tools": [
    { name: "Git & GitHub", level: "Advanced", icon: "FaGitAlt", color: "text-red-600", tags: ["Version Control"] },
    { name: "Postman", level: "Advanced", icon: "/assets/postman-logo.svg", tags: ["API", "Testing"] },
    { name: "VS Code", level: "Advanced", icon: "/assets/vscode-logo.svg", tags: ["IDE"] },
    { name: "Excel", level: "Advanced", icon: "/assets/excel-logo.svg", tags: ["Data", "Sheets"] },
    { name: "PowerPoint", level: "Advanced", icon: "/assets/powerpoint-logo.svg", tags: ["Slides"] },
    { name: "MS Word", level: "Advanced", icon: "/assets/msword-logo.svg", tags: ["Docs"] },
  ],
  "Computer Fundamentals": [
    { name: "Data Structures and Algorithms", level: "Advanced", icon: "/assets/datastructure-logo.png", tags: ["DSA"] },
    { name: "Object Oriented Programming", level: "Advanced", icon: "/assets/oop-logo.svg", tags: ["OOP"] },
    { name: "Data Base Management System", level: "Advanced", icon: "FaDatabase", color: "text-green-700", tags: ["DBMS"] },
    { name: "Operating System", level: "Intermediate", icon: "/assets/os-logo.svg", tags: ["Processes"] },
    { name: "Computer Networking", level: "Intermediate", icon: "/assets/cn-logo.svg", tags: ["Protocols"] },
  ],
  "Soft Skills": [
    { name: "Problem-Solving", level: "Expert", icon: "/assets/problem-solving.png", tags: ["Logic", "Critical Thinking"] },
    { name: "Team Collaboration", level: "Expert", icon: "/assets/team-colloboration.png", tags: ["Teamwork"] },
    { name: "Leadership", level: "Advanced", icon: "/assets/leadership.png", tags: ["Team Lead", "Initiative"] },
    { name: "Communication", level: "Advanced", icon: "/assets/communication.png", tags: ["Verbal", "Clarity"] },
    { name: "Continuous Learning", level: "Expert", icon: "/assets/continuous-learning.png", tags: ["Growth Mindset", "Self-Driven"] },
    { name: "Adaptability", level: "Intermediate", icon: "/assets/adaptibility.png", tags: ["Flexibility", "Resilience"] },
  ],
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState("Programming Languages");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleToggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const filterSkills = (skillsArray) =>
    skillsArray.filter((skill) => {
      const lower = searchTerm.toLowerCase();
      return (
        skill.name.toLowerCase().includes(lower) ||
        skill.level.toLowerCase().includes(lower) ||
        skill.tags.some((tag) => tag.toLowerCase().includes(lower))
      );
    });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32">
      <h2 className="text-4xl text-center font-bold text-sky-700 mb-10" data-aos="fade-up">
        My Skills
      </h2>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg w-full max-w-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-md"
        />
      </div>

      {/* Accordion */}
      <div className="container mx-auto max-w-5xl space-y-6 px-4">
        {Object.entries(allSkills).map(([category, skillList], idx) => {
          const filtered = filterSkills(skillList);
          if (filtered.length === 0) return null;

          return (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-sky-100">
              <button
                onClick={() => handleToggleCategory(category)}
                className="w-full text-left px-6 py-4 font-semibold text-xl text-white bg-sky-600 hover:bg-sky-700 transition"
              >
                {category}
              </button>

              <AnimatePresence initial={false}>
                {expandedCategory === category && (
                  <motion.div
                    className="overflow-hidden px-6 pb-6"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filtered.map((skill, index) => (
                        <SkillCard
                          key={index}
                          name={skill.name}
                          level={skill.level}
                          icon={skill.icon}
                          color={skill.color}
                          tags={skill.tags}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
