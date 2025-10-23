import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "GlobalLogic",
      duration: "Oct 2025 – Present",
      location: "Nagpur, Maharashtra, India (Hybrid)",
      description:
        "Working full-time in the healthcare domain, contributing to backend and Android development. Focused on building scalable, production-ready applications using modern technologies and clean architecture.",
      skills: ["Core Java", "Android Development", "Android Studio", "Kotlin"],
      aosDelay: "0",
    },
    {
      title: "Software Engineer Intern",
      company: "GlobalLogic",
      duration: "Aug 2025 – Sep 2025",
      location: "On-site",
      description:
        "Completed a 2-month internship in backend development using Java, Spring Boot, and Microservices, gaining hands-on experience in building scalable APIs.",
      skills: ["Java", "Spring Boot", "Microservices", "Git", "Postman"],
      aosDelay: "200",
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 relative overflow-hidden"
    >
      {/* Animated gradient background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-transparent to-transparent opacity-60 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <h2
          className="text-4xl font-bold text-sky-700 mb-12"
          data-aos="fade-up"
        >
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group bg-white/90 backdrop-blur-sm border border-sky-100 rounded-2xl p-6 shadow-lg 
                         transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2
                         overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={exp.aosDelay}
            >
              {/* Animated glowing border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-blue-400 
                              opacity-0 group-hover:opacity-100 blur-md animate-gradient-move transition-all duration-700"></div>

              {/* 3D Hover effect layer */}
              <div className="relative z-10 transform group-hover:rotate-[1deg] transition-transform duration-500">
                <h3 className="text-xl font-bold text-slate-800">
                  {exp.title}
                </h3>
                <p className="text-sky-700 font-medium mt-1 flex justify-center items-center gap-2">
                  <FaBuilding /> {exp.company}
                </p>
                <div className="mt-2 flex justify-center items-center gap-3 text-slate-600 text-sm">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>

                <p className="mt-4 text-slate-700 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-sky-100 text-sky-700 text-sm px-3 py-1 rounded-full transition-all duration-300 hover:bg-sky-200 hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle animated gradient light behind card */}
              <div className="absolute -top-1/2 -left-1/2 w-[300%] h-[300%] bg-gradient-to-r from-sky-200 via-blue-200 to-purple-200 opacity-0 group-hover:opacity-30 transition duration-700 blur-3xl animate-spin-slow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradientMove 4s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
