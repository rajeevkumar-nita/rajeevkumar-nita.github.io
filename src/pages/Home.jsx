import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

// Reusable social link config
const socialLinks = [
  { href: "https://github.com/rajeevkumar-nita", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rajeevkumar-nita", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://www.instagram.com/rajeev_kmr77/", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://leetcode.com/u/Winter_Soldier_2002/", img: "/assets/leetcode-logo.svg", label: "LeetCode" },
  { href: "https://codeforces.com/profile/Lucifer204?mobile=false", img: "/assets/codeforces-logo.svg", label: "Codeforces" },
  { href: "https://www.geeksforgeeks.org/user/rjalgorithmyatras/", img: "/assets/gfg-logo.jpeg", label: "GFG" },
  { href: "https://www.codechef.com/users/rajeev_kmr77", img: "/assets/codechef-logo.svg", label: "CodeChef" },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#6A11CB] to-[#2575FC] text-white text-center py-20 scroll-mt-32 relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Profile Image */}
        <img
  src="/assets/Rajeev_kumar.jpg"
  alt="Rajeev Kumar"
  className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white transform transition-all duration-500 ease-in-out
             hover:scale-110 hover:rotate-3 hover:brightness-110 hover:shadow-2xl
             hover:ring-4 hover:ring-yellow-300 hover:ring-offset-2 hover:ring-offset-blue-600"
/>


        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white drop-shadow-lg" data-aos="fade-up">
          Hello, I'm <span className="text-yellow-300">Rajeev Kumar!</span>
        </h1>

        {/* Typewriter Role */}
        <h2
          className="text-lg sm:text-xl mt-2 text-white/90 drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Typewriter
            words={["Problem Solver", "Web Developer", "Full-Stack Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Slogan */}
        <h3
          className="text-2xl sm:text-3xl font-semibold mt-6 mb-4 animate-pulse text-white drop-shadow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let's build something great together 🚀
        </h3>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6" data-aos="zoom-in">
          <a
            href="#projects"
            className="px-6 py-3 w-56 sm:w-auto rounded-lg text-lg font-semibold border border-white text-white hover:bg-white hover:text-blue-700 hover:shadow-lg transition-all duration-300"
          >
            View My Work
          </a>

          <a
            href="mailto:rajeev.nita2025@gmail.com?subject=Let’s Work Together"
            className="px-6 py-3 w-56 sm:w-auto rounded-lg text-lg font-semibold bg-green-500 text-white shadow-lg hover:bg-green-400 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              <FaEnvelope />
              Hire Me
            </div>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialLinks.map(({ href, icon, img, label }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="zoom-in-up"
              aria-label={label}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-slate-100 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110">
                {icon ? (
                  <span className="text-xl text-gray-800">{icon}</span>
                ) : (
                  <img src={img} alt={label} className="w-6 h-6" />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
