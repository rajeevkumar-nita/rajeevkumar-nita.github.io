import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../components/SEO";
import MagneticButton from "../components/MagneticButton";

// Reusable social link config
const socialLinks = [
  { href: "https://github.com/rajeevkumar-nita", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rajeevkumar-nita", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://www.instagram.com/code_with_rajeev/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://leetcode.com/u/Winter_Soldier_2002/", img: "/assets/leetcode-logo.svg", label: "LeetCode" },
  { href: "https://codeforces.com/profile/Lucifer204?mobile=false", img: "/assets/codeforces-logo.svg", label: "Codeforces" },
  { href: "https://www.geeksforgeeks.org/user/rjalgorithmyatras/", img: "/assets/gfg-logo.jpeg", label: "GFG" },
  { href: "https://www.codechef.com/users/rjalgo", img: "/assets/codechef-logo.svg", label: "CodeChef" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
     <>
    <SEO
      title="Rajeev Kumar | Software Engineer | NIT Agartala | GlobalLogic"
      description="Rajeev Kumar is a Software Engineer from NIT Agartala, currently working at GlobalLogic. Full-Stack & Android Developer."
      keywords={[
        "Rajeev Kumar NIT Agartala",
        "Rajeev Kumar Software Engineer",
        "Rajeev Kumar GlobalLogic",
        "NIT Agartala Developer",
        "Rajeev Kumar Portfolio",
      ]}
    />
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white text-center py-28 scroll-mt-32"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0c1a3a]" />
      <div className="absolute inset-0 bg-hero-mesh opacity-90" />

      {/* Floating blobs */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/30 rounded-full blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl animate-blob [animation-delay:4s]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Profile Image */}
        <img
          src="/assets/rajeev_kumar1.jpeg"
          alt="Rajeev Kumar - Software Engineer from NIT Agartala"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/30 shadow-glow animate-float
             transform transition-all duration-500 ease-in-out
             hover:scale-110 hover:rotate-3 hover:brightness-110
             hover:ring-4 hover:ring-sky-300/60 hover:ring-offset-2 hover:ring-offset-slate-900"
        />

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-white drop-shadow-lg" data-aos="fade-up">
          Hello, I'm{" "}
          <span className="text-gradient-animated">Rajeev Kumar!</span>
        </h1>
        <p className="text-sm sm:text-base text-white/70 mt-1 italic">
          Alumnus of National Institute of Technology, Agartala (NIT Agartala)
        </p>

        {/* 🔹 New Role Line */}
        <p
          className="text-lg sm:text-xl text-white/90 font-medium mt-2 mb-2 drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Software Engineer @ <span className="text-sky-300 font-semibold">GlobalLogic</span>
        </p>

        {/* Typewriter Role */}
        <h2
          className="text-lg sm:text-2xl mt-2 text-white/90 drop-shadow-sm font-display"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Typewriter
            words={["Full-Stack Developer", "Android Developer", "Problem Solver",   "Founder • PulsePeek (AI Health Platform)"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p
          className="mt-3 text-white/75 text-sm sm:text-base max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Building <span className="text-sky-300 font-semibold">PulsePeek</span> — an AI-powered personal health companion that analyzes images, symptoms, and lifestyle data to deliver safe, explainable health guidance.
        </p>

        {/* Slogan */}
        <h3
          className="text-[clamp(1.2rem,5vw,1.75rem)] font-semibold mt-6 mb-4 text-gradient whitespace-nowrap"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let's build something great together 🚀
        </h3>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6" data-aos="zoom-in">
          <MagneticButton
            as="a"
            href="#projects"
            className="px-6 py-3 w-56 sm:w-auto rounded-xl text-lg font-semibold bg-white/10 border border-white/25 backdrop-blur-md text-white hover:bg-white/20 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
          >
            View My Work
          </MagneticButton>

          <MagneticButton
            as="a"
            href="mailto:rajeev.nita2025@gmail.com?subject=Let’s Work Together"
            className="px-6 py-3 w-56 sm:w-auto rounded-xl text-lg font-semibold bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg hover:shadow-glow hover:-translate-y-0.5 hover:scale-[1.03] transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope />
              Hire Me
            </div>
          </MagneticButton>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex flex-nowrap justify-center gap-3 sm:gap-5 overflow-x-auto">
          {socialLinks.map(({ href, icon, img, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in-up"
              aria-label={label}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md hover:shadow-glow transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                {icon ? (
                  <span className="text-xl text-gray-800">{icon}</span>
                ) : (
                  <img src={img} alt={label} className="w-6 h-6" />
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Signature code/terminal window */}
        <div
          className="mt-12 max-w-xl mx-auto text-left rounded-2xl overflow-hidden border border-white/15 bg-slate-900/60 backdrop-blur-md shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs text-white/50 font-mono">developer.js</span>
          </div>
          {/* Code body */}
          <pre className="px-5 py-4 text-[13px] sm:text-sm font-mono leading-relaxed overflow-x-auto">
<code>
<span className="text-fuchsia-400">const</span> <span className="text-sky-300">rajeev</span> <span className="text-white/70">=</span> <span className="text-white/70">{"{"}</span>{"\n"}
{"  "}<span className="text-emerald-300">role</span><span className="text-white/70">:</span> <span className="text-amber-300">'Software Engineer @ GlobalLogic'</span><span className="text-white/70">,</span>{"\n"}
{"  "}<span className="text-emerald-300">stack</span><span className="text-white/70">:</span> <span className="text-white/70">[</span><span className="text-amber-300">'React'</span><span className="text-white/70">,</span> <span className="text-amber-300">'Node'</span><span className="text-white/70">,</span> <span className="text-amber-300">'Spring Boot'</span><span className="text-white/70">],</span>{"\n"}
{"  "}<span className="text-emerald-300">building</span><span className="text-white/70">:</span> <span className="text-amber-300">'PulsePeek — AI Health Platform'</span><span className="text-white/70">,</span>{"\n"}
{"  "}<span className="text-emerald-300">solved</span><span className="text-white/70">:</span> <span className="text-orange-300">1500</span><span className="text-white/70">,</span> <span className="text-slate-500">// DSA problems</span>{"\n"}
{"  "}<span className="text-emerald-300">status</span><span className="text-white/70">:</span> <span className="text-amber-300">'always shipping 🚀'</span><span className="text-white/70">,</span>{"\n"}
<span className="text-white/70">{"}"};</span>
</code>
          </pre>
        </div>
      </div>
    </section>
    </>

  );
};

export default Home;




