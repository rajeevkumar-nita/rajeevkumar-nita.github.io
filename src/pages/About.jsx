import React, { useEffect } from "react";
import FlipCard from "../components/FlipCard";
import Timeline from "../components/Timeline";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="bg-white text-slate-800 py-20 px-6 scroll-mt-32">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title & Intro */}
        <h2 className="text-4xl font-bold text-sky-600 mb-4" data-aos="fade-up">
          About Me
        </h2>
        <p
          className="text-base sm:text-lg text-slate-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          I’m <strong className="text-slate-800">Rajeev Kumar</strong>, a <strong className="text-blue-700">Full-Stack Developer</strong> and <strong className="text-purple-700">DSA enthusiast</strong> with <strong className="text-green-600">1500+ problems solved</strong> and real-world projects built using <strong className="text-sky-600">React</strong>, <strong className="text-sky-600">Node</strong>, and <strong className="text-sky-600">MongoDB</strong>. <span className="text-indigo-700 font-semibold">I enjoy turning logic into clean code and ideas into real products.</span>
        </p>

        {/* Flip Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <div data-aos="zoom-in" data-aos-delay="0">
            <FlipCard front="🧠 Problem Solver" back="1500+ DSA Questions" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="100">
            <FlipCard front="🌐 Full Stack Dev" back="React, Node, MongoDB" />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FlipCard front="🏆 Competitive Coder" back="LeetCode, GFG, CF, CC" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center mb-16">
          <div className="text-lg font-medium" data-aos="fade-up">
            <div className="text-4xl font-extrabold text-sky-600">
              <CountUp end={1500} duration={2} />+
            </div>
            <div className="text-slate-700">DSA Solved</div>
          </div>
          <div className="text-lg font-medium" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-extrabold text-green-600">
              <CountUp end={15} duration={2} />+
            </div>
            <div className="text-slate-700">Projects</div>
          </div>
          <div className="text-lg font-medium" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-extrabold text-purple-600">
              <CountUp end={100} duration={2} />+
            </div>
            <div className="text-slate-700">Students Mentored</div>
          </div>
        </div>

        {/* Timeline */}
        <div
          className="mt-12 py-12 px-4 bg-gradient-to-r from-[#eef2ff] to-[#e0f2fe] rounded-xl shadow-inner transition-all duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-bold text-sky-700 mb-6">My B.Tech Journey</h3>
          <Timeline />
        </div>

        {/* Footer Quote */}
        <p className="mt-16 text-base italic text-slate-500" data-aos="fade-in" data-aos-delay="100">
          “Code. Build. Evolve.”
        </p>
      </div>
    </section>
  );
};

export default About;
