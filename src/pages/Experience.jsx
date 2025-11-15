// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

// const Experience = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const experiences = [
//     {
//       title: "Software Engineer",
//       company: "GlobalLogic",
//       duration: "Oct 2025 – Present",
//       location: "Nagpur, Maharashtra, India (Hybrid)",
//       description:
//         "Building scalable backend & Android apps for the healthcare sector using modern technologies and clean architecture.",
//       skills: ["Core Java", "Android Development", "Android Studio", "Kotlin"],
//       aosDelay: "0",
//     },
//     {
//       title: "Software Engineer Intern",
//       company: "GlobalLogic",
//       duration: "Aug 2025 – Sep 2025",
//       location: "On-site",
//       description:
//         "Gained hands-on experience building scalable APIs during a 2-month backend internship using Java, Spring Boot, and Microservices.",
//       skills: ["Java", "Spring Boot", "Microservices", "Git", "Postman"],
//       aosDelay: "200",
//     },
//   ];

//   return (
//     <section
//       id="experience"
//       className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 relative overflow-hidden"
//     >
//       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
//         {/* Title */}
//         <h2
//           className="text-4xl font-bold text-sky-700 mb-16" // Increased margin-bottom
//           data-aos="fade-up"
//         >
//           Experience
//         </h2>

//         {/* Vertical Timeline Container */}
//         <div className="relative max-w-3xl mx-auto">
          
//           {/* The Vertical Line */}
//           <div className="absolute left-3 sm:left-6 top-1 w-1 bg-sky-200 h-full z-0"></div>

//           {/* Mapping the experiences */}
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className="relative pl-12 sm:pl-20 pb-12" // Space for line + dot
//               data-aos="fade-up"
//               data-aos-delay={exp.aosDelay}
//             >
//               {/* Dot on the line */}
//               <div className="absolute left-3 sm:left-6 top-2 w-6 h-6 bg-white border-4 border-sky-500 rounded-full z-10 transform -translate-x-1/2"></div>

//               {/* The Card */}
//               <div className="relative bg-white/90 backdrop-blur-sm border border-sky-100 rounded-xl shadow-lg p-6 text-left
//                               transition-all duration-300 hover:shadow-xl hover:border-sky-300 hover:scale-[1.02]">
                
//                 {/* Arrow pointing to the dot */}
//                 <div className="absolute -left-4 sm:-left-5 top-5 w-0 h-0 
//                               border-t-[10px] border-t-transparent
//                               border-r-[10px] border-r-white/90
//                               border-b-[10px] border-b-transparent
//                               hidden sm:block">
//                 </div>

//                 {/* --- Card Content --- */}
                
//                 {/* Title */}
//                 <h3 className="text-xl font-bold text-slate-800">
//                   {exp.title}
//                 </h3>
                
//                 {/* Company */}
//                 <p className="text-sky-700 font-medium mt-1 flex items-center gap-2">
//                   <FaBuilding /> {exp.company}
//                 </p>
                
//                 {/* Date/Location (Responsive) */}
//                 <div className="mt-3 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-4 text-slate-600 text-sm">
//                   <span className="flex items-center gap-2">
//                     <FaCalendarAlt className="flex-shrink-0" /> {exp.duration}
//                   </span>
//                   <span className="flex items-start sm:items-center gap-2">
//                     <FaMapMarkerAlt className="flex-shrink-0 mt-1 sm:mt-0" /> {exp.location}
//                   </span>
//                 </div>

//                 {/* Description */}
//                 <p className="mt-4 text-slate-700 leading-relaxed">
//                   {exp.description}
//                 </p>

//                 {/* Skills (Responsive) */}
//                 <div className="mt-4 flex flex-wrap justify-start gap-2">
//                   {exp.skills.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="bg-sky-100 text-sky-700 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full transition-all duration-300 hover:bg-sky-200"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//                 {/* --- End of Card Content --- */}

//               </div> {/* End of card */}
//             </div> // End of timeline item
//           ))}
//         </div> {/* End of timeline container */}
//       </div>

//     </section>
//   );
// };

// export default Experience;





import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

/**
 * Renders the Experience section as a vertical timeline.
 * This component lists professional roles and internships.
 */
const Experience = () => {
  // Initialize AOS (Animate on Scroll) on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  /**
   * @constant experiences
   * @description An array of experience objects to be rendered.
   */
  const experiences = [
    {
      title: "Associate Software Engineer", // Changed from "Software Engineer" as per our discussion
      company: "GlobalLogic",
      duration: "Oct 2025 – Present",
      location: "Nagpur, Maharashtra, India (Hybrid)",
      description:
        "Building scalable backend & Android apps for the healthcare sector using modern technologies and clean architecture.",
      skills: ["Core Java", "Android Development", "Android Studio", "Kotlin"],
      aosDelay: "0",
    },
    {
      title: "Software Engineer Intern",
      company: "GlobalLogic",
      duration: "Aug 2025 – Sep 2025",
      location: "On-site",
      description:
        "Gained hands-on experience building scalable APIs during a 2-month backend internship using Java, Spring Boot, and Microservices.",
      skills: ["Java", "Spring Boot", "Microservices", "Git", "Postman"],
      aosDelay: "200",
    },
  ];

  return (
    // Section Container: Applies base light/dark backgrounds and text colors
    <section
      id="experience"
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800 text-slate-800 dark:text-slate-300 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Section Title */}
        <h2
          className="text-4xl font-bold text-sky-700 dark:text-sky-400 mb-16"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* The Vertical Line: Styled for both light and dark modes */}
          <div className="absolute left-3 sm:left-6 top-1 w-1 bg-sky-200 dark:bg-slate-700 h-full z-0"></div>

          {/* Map over each experience object */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-12 sm:pl-20 pb-12" // Provides spacing for the timeline
              data-aos="fade-up"
              data-aos-delay={exp.aosDelay}
            >
              {/* Timeline Dot: Styled for light and dark modes */}
              <div className="absolute left-3 sm:left-6 top-2 w-6 h-6 bg-white dark:bg-slate-900 border-4 border-sky-500 dark:border-sky-400 rounded-full z-10 transform -translate-x-1/2"></div>

              {/* Experience Card */}
              <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-sky-100 dark:border-slate-700 rounded-xl shadow-lg p-6 text-left
                              transition-all duration-300 hover:shadow-xl dark:hover:border-sky-600 hover:scale-[1.02]">
                
                {/* Card Arrow: Points to the timeline dot */}
                <div className="absolute -left-4 sm:-left-5 top-5 w-0 h-0 
                                  border-t-[10px] border-t-transparent
                                  border-r-[10px] border-r-white/90 dark:border-r-slate-800/90
                                  border-b-[10px] border-b-transparent
                                  hidden sm:block">
                </div>

                {/* --- Card Content --- */}
                
                {/* Job Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {exp.title}
                </h3>
                
                {/* Company Name */}
                <p className="text-sky-700 dark:text-sky-400 font-medium mt-1 flex items-center gap-2">
                  <FaBuilding /> {exp.company}
                </p>
                
                {/* Date/Location (Responsive) */}
                <div className="mt-3 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-4 text-slate-600 dark:text-slate-400 text-sm">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="flex-shrink-0" /> {exp.duration}
                  </span>
                  <span className="flex items-start sm:items-center gap-2">
                    <FaMapMarkerAlt className="flex-shrink-0 mt-1 sm:mt-0" /> {exp.location}
                  </span>
                </div>

                {/* Job Description */}
                <p className="mt-4 text-slate-700 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>

                {/* Skill Tags (Responsive) */}
                <div className="mt-4 flex flex-wrap justify-start gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-300 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full transition-all duration-300 hover:bg-sky-200 dark:hover:bg-sky-800/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* --- End of Card Content --- */}

              </div> {/* End of card */}
            </div> // End of timeline item
          ))}
        </div> {/* End of timeline container */}
      </div>

    </section>
  );
};

export default Experience;