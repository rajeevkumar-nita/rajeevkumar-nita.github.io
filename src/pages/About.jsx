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
          I’m <strong className="text-slate-800">Rajeev Kumar</strong>, a{" "}
          <strong className="text-blue-700">Software Engineer at GlobalLogic</strong>{" "}
          working on backend and mobile development in the{" "}
          <strong className="text-purple-700">healthcare domain</strong>. Passionate about{" "}
          <strong className="text-sky-700">clean code</strong>,{" "}
          <strong className="text-green-600">scalable systems</strong>, and{" "}
          <strong className="text-indigo-700">real-world problem solving</strong>. I’ve solved{" "}
          <strong>1500+ DSA problems</strong> and built projects using{" "}
          <strong>React, Node.js,</strong> and <strong>Spring Boot</strong>.
        </p>

        

        {/* Flip Cards */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
  <div data-aos="zoom-in" data-aos-delay="0">
    {/* Card 1: MERN Stack */}
    <FlipCard front="🌐 MERN Stack Dev" back="React, Node.js, MongoDB" />
  </div>
  <div data-aos="zoom-in" data-aos-delay="100">
    {/* Card 2: Android */}
    <FlipCard front="📱 Android Developer" back="Java & Kotlin" />
  </div>
  <div data-aos="zoom-in" data-aos-delay="200">
    {/* Card 3: Problem Solving */}
    <FlipCard front="🧠 Problem Solver" back="1500+ DSA Questions" />
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
        <p
          className="mt-16 text-base italic text-slate-500"
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

