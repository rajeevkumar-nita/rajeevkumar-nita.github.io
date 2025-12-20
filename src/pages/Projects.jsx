import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../data/projectData";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("development");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === activeTab
  );

  return (
    <section
      id="projects"
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-4xl font-bold text-sky-700 dark:text-sky-400 mb-8"
          data-aos="fade-up"
        >
          My Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("development")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "development"
                ? "bg-sky-600 text-white"
                : "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300"
            }`}
          >
            Development Projects
          </button>

          <button
            onClick={() => setActiveTab("gaming")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "gaming"
                ? "bg-sky-600 text-white"
                : "bg-slate-300 dark:bg-slate-700 text-slate-800 dark:text-slate-300"
            }`}
          >
            Gaming Projects
          </button>
        </div>

        {/* Slider with DOT pagination */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
