import React, { useEffect } from "react";
import Timeline from "../components/Timeline";
import CountUp from "react-countup";
import { Code2, Rocket, Brain, FolderGit2, Users } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section 
      id="about" 
      className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 py-20 px-6 scroll-mt-32"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title & Intro */}
        <span className="section-eyebrow" data-aos="fade-up">Who I Am</span>
        <h2 
          className="text-4xl font-bold text-gradient-heading mb-4 mt-3" 
          data-aos="fade-up"
        >
          About Me
        </h2>

        <p
          className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I’m <strong className="text-slate-800 dark:text-slate-100">Rajeev Kumar</strong>, a{" "}
          <strong className="text-blue-700 dark:text-blue-400">Software Engineer at GlobalLogic</strong>{" "}
          working on backend and mobile development in the{" "}
          <strong className="text-purple-700 dark:text-purple-400">healthcare domain</strong>.  
  I’m also the <strong className="text-green-600 dark:text-green-400">Founder of PulsePeek</strong> — an AI-powered personal health companion focused on{" "}
  <strong className="text-sky-700 dark:text-sky-400">safe, explainable, and privacy-first health insights</strong>.
  <br /><br />
           I enjoy building <strong className="text-indigo-700 dark:text-indigo-400">real-world products</strong> that balance{" "}
  <strong>engineering, UX, and user trust</strong>. I’ve solved{" "}
  <strong className="dark:text-slate-100">1500+ DSA problems</strong> and work with{" "}
  <strong className="dark:text-slate-100">React, Node.js, Spring Boot</strong>, and modern AI systems.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-16 text-left">
          {/* Intro / role — large tile */}
          <div
            className="col-span-2 group relative overflow-hidden rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-sky-50 to-violet-50 dark:from-slate-800 dark:to-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-3 relative z-10">
              <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <Code2 size={22} />
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                Full-Stack Engineer
              </h3>
            </div>
            <p className="relative z-10 text-sm sm:text-base text-slate-600 dark:text-slate-400">
              I build real-world products that balance{" "}
              <strong className="text-slate-800 dark:text-slate-200">engineering, UX, and user trust</strong>{" "}
              — working across backend, mobile, and modern AI systems.
            </p>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {["React", "Node.js", "Spring Boot", "TypeScript", "AI Systems"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/70 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Founder tile */}
          <div
            className="col-span-2 md:col-span-1 group relative overflow-hidden rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="inline-flex p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-3">
              <Rocket size={22} />
            </span>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
              Product Builder
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Founder of{" "}
              <strong className="text-slate-800 dark:text-slate-200">PulsePeek</strong> — an
              AI-powered personal health companion.
            </p>
          </div>

          {/* Stat: DSA */}
          <div
            className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 text-center bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-aos="zoom-in"
          >
            <Brain className="mx-auto mb-2 text-sky-600 dark:text-sky-400" size={24} />
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-600 dark:text-sky-400">
              <CountUp end={1500} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">DSA Solved</div>
          </div>

          {/* Stat: Projects */}
          <div
            className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 text-center bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FolderGit2 className="mx-auto mb-2 text-green-600 dark:text-green-400" size={24} />
            <div className="text-3xl sm:text-4xl font-extrabold text-green-600 dark:text-green-400">
              <CountUp end={25} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Projects</div>
          </div>

          {/* Stat: Mentored */}
          <div
            className="col-span-2 md:col-span-1 group relative overflow-hidden rounded-2xl p-5 sm:p-6 text-center bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Users className="mx-auto mb-2 text-purple-600 dark:text-purple-400" size={24} />
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 dark:text-purple-400">
              <CountUp end={100} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Students Mentored</div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="mt-12 py-12 px-4 bg-gradient-to-r from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800 rounded-xl shadow-inner transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold text-sky-700 dark:text-sky-400 mb-6">My B.Tech Journey</h3>
          <Timeline />
        </div>

        {/* Footer Quote */}
        <p
  className="mt-16 text-base italic text-slate-500 dark:text-slate-400"
  data-aos="fade-in"
  data-aos-delay="100"
>
  “Code. Build. Evolve.”
</p>
      </div>
    </section>
  );
};

export default About;