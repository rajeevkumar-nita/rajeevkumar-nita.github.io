// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // For accordion animation
// import AOS from "aos"; // For scroll animations
// import "aos/dist/aos.css"; // AOS styles
// import SkillCard from "../components/SkillCard"; // Your SkillCard component

// /**
//  * @constant allSkills
//  * @description Defines the hierarchical data structure for all skills.
//  * Categories are keys, and values are arrays of skill objects.
//  * Each skill object contains: name, level, icon (path or component name), tags, and optional color.
//  */
// const allSkills = {
//   "Programming Languages": [
//     { name: "C", level: "Intermediate", icon: "/assets/c-logo.svg", tags: ["Low-level", "Procedural"] },
//     { name: "C++", level: "Expert", icon: "/assets/c++-logo.svg", tags: ["OOP", "STL"] },
//     { name: "JavaScript", level: "Expert", icon: "FaJsSquare", color: "text-yellow-500", tags: ["Frontend", "Logic"] },
//     { name: "SQL", level: "Advanced", icon: "FaDatabase", color: "text-blue-700", tags: ["Queries", "RDBMS"] },
//     { name: "Java", level: "Intermediate", icon: "FaJava", color: "text-red-600", tags: ["Backend", "OOP"] },
//     { name: "Python", level: "Intermediate", icon: "FaPython", color: "text-yellow-500", tags: ["Scripting", "ML"] },
//   ],
//   "Technologies": [
//     { name: "HTML5", level: "Expert", icon: "FaCss3Alt", color: "text-orange-600", tags: ["Markup"] },
//     { name: "Tailwind CSS", level: "Advanced", icon: "SiTailwindcss", color: "text-blue-500", tags: ["Utility", "Design"] },
//     { name: "React.js", level: "Expert", icon: "FaReact", color: "text-blue-600", tags: ["Hooks", "SPA"] },
//     { name: "Next.js", level: "Intermediate", icon: "SiNextdotjs", color: "text-black", tags: ["SSR", "Routing"] },
//     { name: "Node.js", level: "Intermediate", icon: "FaNode", color: "text-green-600", tags: ["Server", "Express"] },
//     { name: "MongoDB", level: "Intermediate", icon: "/assets/mongodb-logo.svg", tags: ["NoSQL", "Database"] },
//     // TYPO FIX: Changed "name:F:" to "name:"
//     { name: "Redux", level: "Advanced", icon: "SiRedux", color: "text-purple-600", tags: ["State", "Middleware"] },
//     { name: "Express.js", level: "Intermediate", icon: "/assets/express-logo.svg", tags: ["Routing", "API"] },
//     { name: "Socket.IO", level: "Intermediate", icon: "SiSocketdotio", color: "text-black", tags: ["WebSockets", "Real-time"] }
//   ],
//   "Other Tools": [
//     { name: "Git & GitHub", level: "Advanced", icon: "FaGitAlt", color: "text-red-600", tags: ["Version Control"] },
//     { name: "Postman", level: "Advanced", icon: "/assets/postman-logo.svg", tags: ["API", "Testing"] },
//     { name: "VS Code", level: "Advanced", icon: "/assets/vscode-logo.svg", tags: ["IDE"] },
//     { name: "Excel", level: "Advanced", icon: "/assets/excel-logo.svg", tags: ["Data", "Sheets"] },
//     { name: "PowerPoint", level: "Advanced", icon: "/assets/powerpoint-logo.svg", tags: ["Slides"] },
//     { name: "MS Word", level: "Advanced", icon: "/assets/msword-logo.svg", tags: ["Docs"] },
//   ],
//   "Computer Fundamentals": [
//     { name: "Data Structures and Algorithms", level: "Advanced", icon: "/assets/datastructure-logo.png", tags: ["DSA"] },
//     { name: "Object Oriented Programming", level: "Advanced", icon: "/assets/oop-logo.svg", tags: ["OOP"] },
//     { name: "Data Base Management System", level: "Advanced", icon: "FaDatabase", color: "text-green-700", tags: ["DBMS"] },
//     { name: "Operating System", level: "Intermediate", icon: "/assets/os-logo.svg", tags: ["Processes"] },
//     { name: "Computer Networking", level: "Intermediate", icon: "/assets/cn-logo.svg", tags: ["Protocols"] },
//   ],
//   "Soft Skills": [
//     { name: "Problem-Solving", level: "Expert", icon: "/assets/problem-solving.png", tags: ["Logic", "Critical Thinking"] },
//     { name: "Team Collaboration", level: "Expert", icon: "/assets/team-colloboration.png", tags: ["Teamwork"] },
//     { name: "Leadership", level: "Advanced", icon: "/assets/leadership.png", tags: ["Team Lead", "Initiative"] },
//     { name: "Communication", level: "Advanced", icon: "/assets/communication.png", tags: ["Verbal", "Clarity"] },
//     // TYPO FIX: Changed "name:C:" to "name:"
//     { name: "Continuous Learning", level: "Expert", icon: "/assets/continuous-learning.png", tags: ["Growth Mindset", "Self-Driven"] },
//     { name: "Adaptability", level: "Intermediate", icon: "/assets/adaptibility.png", tags: ["Flexibility", "Resilience"] },
//   ],
// };

// /**
//  * Renders the Skills section of the portfolio.
//  * Features a searchable, collapsible accordion of skill categories.
//  */
// const Skills = () => {
//   // State to hold the current value of the search input
//   const [searchTerm, setSearchTerm] = useState("");
//   // State to track which accordion category is currently open
//   const [expandedCategory, setExpandedCategory] = useState("Programming Languages"); // Default open

//   // Initialize AOS (Animate on Scroll) library on component mount
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   /**
//    * Toggles the accordion.
//    * If the clicked category is already open, it closes it (sets to null).
//    * Otherwise, it opens the clicked category.
//    * @param {string} category - The name of the category to toggle.
//    */
//   const handleToggleCategory = (category) => {
//     setExpandedCategory(expandedCategory === category ? null : category);
//   };

//   /**
//    * Filters a given array of skills based on the current searchTerm.
//    * Checks against skill name, level, and tags.
//    * @param {Array} skillsArray - The array of skill objects to filter.
//    * @returns {Array} - The filtered array of skills.
//    */
//   const filterSkills = (skillsArray) =>
//     skillsArray.filter((skill) => {
//       const lower = searchTerm.toLowerCase();
//       return (
//         skill.name.toLowerCase().includes(lower) ||
//         skill.level.toLowerCase().includes(lower) ||
//         skill.tags.some((tag) => tag.toLowerCase().includes(lower))
//       );
//     });

//   return (
//     <section id="skills" className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32">
//       {/* Section Title */}
//       <h2 className="text-4xl text-center font-bold text-sky-700 mb-10" data-aos="fade-up">
//         My Skills
//       </h2>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-10">
//         <input
//           type="text"
//           placeholder="Search skills..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 rounded-lg w-full max-w-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-md"
//         />
//       </div>

//       {/* Accordion Container */}
//       <div className="container mx-auto max-w-5xl space-y-6 px-4">
//         {Object.entries(allSkills).map(([category, skillList], idx) => {
          
//           // Filter skills first based on search term
//           const filtered = filterSkills(skillList);
          
//           // If search term filters out all skills in a category, don't render the category
//           if (filtered.length === 0) return null;

//           // Check if the current category is the one that's expanded
//           const isExpanded = expandedCategory === category;

//           return (
//             <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden border border-sky-100">
              
//               {/* Accordion Button */}
//               <button
//                 onClick={() => handleToggleCategory(category)}
//                 className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-xl text-white bg-sky-600 hover:bg-sky-700 transition"
//               >
//                 {/* Category Title */}
//                 <span>{category}</span>
                
//                 {/* +/- Indicator Icon */}
//                 <span className="text-2xl">
//                   {isExpanded ? "-" : "+"}
//                 </span>
//               </button>

//               {/* Collapsible Content Area (uses Framer Motion) */}
//               <AnimatePresence initial={false}>
//                 {isExpanded && (
//                   <motion.div
//                     className="overflow-hidden px-6 pb-6"
//                     // Animation: Start state (collapsed)
//                     initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                     // Animation: End state (expanded)
//                     animate={{ opacity: 1, height: "auto", marginTop: 16 }}
//                     // Animation: Exit state (collapsing)
//                     exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                     transition={{ duration: 0.4, ease: "easeInOut" }}
//                   >
//                     {/* Grid for Skill Cards */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {filtered.map((skill, index) => (
//                         <SkillCard
//                           key={index}
//                           name={skill.name}
//                           level={skill.level}
//                           icon={skill.icon}
//                           color={skill.color}
//                           tags={skill.tags}
//                         />
//                       ))}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // For accordion animation
import AOS from "aos"; // For scroll animations
import "aos/dist/aos.css"; // AOS styles
import SkillCard from "../components/SkillCard"; // Your SkillCard component

/**
 * @constant allSkills
 * @description Defines the hierarchical data structure for all skills.
 */
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

/**
 * Renders the Skills section of the portfolio.
 * Features a searchable, collapsible accordion of skill categories.
 */
const Skills = () => {
  // State to hold the current value of the search input
  const [searchTerm, setSearchTerm] = useState("");
  // State to track which accordion category is currently open
  const [expandedCategory, setExpandedCategory] = useState("Programming Languages"); // Default open

  // Initialize AOS (Animate on Scroll) library on component mount
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  /**
   * Toggles the accordion.
   * If the clicked category is already open, it closes it (sets to null).
   * Otherwise, it opens the clicked category.
   * @param {string} category - The name of the category to toggle.
   */
  const handleToggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  /**
   * Filters a given array of skills based on the current searchTerm.
   * Checks against skill name, level, and tags.
   * @param {Array} skillsArray - The array of skill objects to filter.
   * @returns {Array} - The filtered array of skills.
   */
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
    // Section Container: Added dark mode gradient and text color
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-300 scroll-mt-32"
    >
      {/* Section Title: Added dark mode text color */}
      <h2 
        className="text-4xl text-center font-bold text-sky-700 dark:text-sky-400 mb-10" 
        data-aos="fade-up"
      >
        My Skills
      </h2>

      {/* Search Bar: Added dark mode background, text, border, and focus ring */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg w-full max-w-md text-slate-800 dark:text-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 shadow-md"
        />
      </div>

      {/* Accordion Container */}
      <div className="container mx-auto max-w-5xl space-y-6 px-4">
        {Object.entries(allSkills).map(([category, skillList], idx) => {
          
          const filtered = filterSkills(skillList);
          if (filtered.length === 0) return null;
          const isExpanded = expandedCategory === category;

          return (
            // Accordion Item: Added dark mode background and border
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-sky-100 dark:border-slate-700"
            >
              
              {/* Accordion Button: Added dark mode hover color */}
              <button
                onClick={() => handleToggleCategory(category)}
                className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-xl text-white bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-600 transition"
              >
                <span>{category}</span>
                <span className="text-2xl">
                  {isExpanded ? "-" : "+"}
                </span>
              </button>

              {/* Collapsible Content Area */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    className="overflow-hidden px-6 pb-6"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {/* Grid for Skill Cards */}
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