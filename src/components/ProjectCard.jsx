
// import React from 'react';
// import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';

// /**
//  * Renders a single project card.
//  * @param {object} props - Component props.
//  * @param {object} props.project - The entire project object from projectData.js.
//  * @param {function} props.onViewDetails - Function to open the modal.
//  */
// const ProjectCard = ({ project, onViewDetails }) => (
//   // Card Container: No changes needed to your existing styles
//   <div
//     className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-sky-100 dark:border-slate-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
//     data-aos={project.aos}
//     data-aos-delay={project.aosDelay}
//   >
//     <div>
//       {/* Title: Added dark mode text color */}
//       <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{project.title}</h3>
      
//       {/* Description: Added dark mode text color */}
//       <p className="mt-2 text-slate-600 dark:text-slate-400">{project.shortDescription}</p>
//     </div>
    
//     {/* Button Container */}
//     <div className="mt-4 flex flex-col space-y-2">
      
//       {/* --- NEW "VIEW DETAILS" BUTTON --- */}
//       <button
//         onClick={onViewDetails}
//         className="flex items-center justify-center gap-2 text-sm bg-transparent text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 px-4 py-2 rounded-md hover:bg-sky-100 dark:hover:bg-slate-700 hover:shadow-md transition duration-300"
//       >
//         <FaInfoCircle /> View Details
//       </button>

//       {/* --- YOUR EXISTING BUTTONS --- */}
//       <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
//         <a
//           href={project.liveLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 flex items-center justify-center gap-2 text-sm bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 hover:shadow-md transition duration-300"
//         >
//           <FaExternalLinkAlt /> View Project
//         </a>

//         <a
//           href={project.githubLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 flex items-center justify-center gap-2 text-sm bg-slate-800 dark:bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-900 dark:hover:bg-slate-600 hover:shadow-md transition duration-300"
//         >
//           <FaGithub /> GitHub
//         </a>
//       </div>
//     </div>
//   </div>
// );

// export default ProjectCard;




import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from 'react-icons/fa';

/**
 * Renders a single project card.
 * @param {object} props - Component props.
 * @param {object} props.project - The entire project object from projectData.js.
 * @param {function} props.onViewDetails - Function to open the modal.
 */
const ProjectCard = ({ project, onViewDetails }) => (
  // Card Container: No changes needed to your existing styles
  <div
    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-sky-100 dark:border-slate-700 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
    data-aos={project.aos}
    data-aos-delay={project.aosDelay}
  >
    <div>
      {/* Title: High contrast text */}
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
      
      {/* Description: CHANGED slate-600 -> slate-700 and slate-400 -> slate-300 for accessibility */}
      <p className="mt-2 text-slate-700 dark:text-slate-300">{project.shortDescription}</p>
    </div>
    
    {/* Button Container */}
    <div className="mt-4 flex flex-col space-y-2">
      
      {/* --- VIEW DETAILS BUTTON --- */}
      <button
        onClick={onViewDetails}
        // CHANGED: text-sky-600 -> text-sky-700 for better visibility
        className="flex items-center justify-center gap-2 text-sm bg-transparent text-sky-700 dark:text-sky-400 border border-sky-600 dark:border-sky-400 px-4 py-2 rounded-md hover:bg-sky-100 dark:hover:bg-slate-700 hover:shadow-md transition duration-300"
      >
        <FaInfoCircle /> View Details
      </button>

      {/* --- EXISTING BUTTONS --- */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-sm bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 hover:shadow-md transition duration-300"
        >
          <FaExternalLinkAlt /> View Project
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-sm bg-slate-800 dark:bg-slate-700 text-white px-4 py-2 rounded-md hover:bg-slate-900 dark:hover:bg-slate-600 hover:shadow-md transition duration-300"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;