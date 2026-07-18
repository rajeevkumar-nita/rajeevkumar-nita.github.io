import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import MagneticButton from "../components/MagneticButton";

const GITHUB_USERNAME = "rajeevkumar-nita";

const GitHubStats = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme tokens for the external stat cards
  const statsTheme = isDark ? "tokyonight" : "default";
  const streakTheme = isDark ? "tokyonight" : "default";
  const graphTheme = isDark ? "tokyo-night" : "minimal";

  const statsUrl = `https://github-readme-stats-sigma-five.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&count_private=true&include_all_commits=true&theme=${statsTheme}`;
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&hide_border=true&theme=${streakTheme}`;
  const graphUrl = `https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&hide_border=true&theme=${graphTheme}`;

  return (
    <section
      id="github"
      className="scroll-mt-32 py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-800 dark:to-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-10" data-aos="fade-up">
          <span className="section-eyebrow">Proof Of Work</span>
          <h2 className="text-4xl font-bold text-gradient-heading">
            GitHub Activity
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A live snapshot of my GitHub activity and coding consistency.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid gap-6 sm:grid-cols-2 mb-6" data-aos="fade-up" data-aos-delay="100">
          <img
            src={statsUrl}
            alt="Rajeev Kumar's GitHub statistics"
            loading="lazy"
            className="w-full rounded-2xl shadow-card bg-white dark:bg-slate-900/40 p-2"
          />
          <img
            src={streakUrl}
            alt="Rajeev Kumar's GitHub streak"
            loading="lazy"
            className="w-full rounded-2xl shadow-card bg-white dark:bg-slate-900/40 p-2"
          />
        </div>

        {/* Contribution graph */}
        <img
          src={graphUrl}
          alt="Rajeev Kumar's GitHub contribution graph"
          loading="lazy"
          className="w-full rounded-2xl shadow-card bg-white dark:bg-slate-900/40 p-2 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        />

        {/* CTA */}
        <MagneticButton
          as="a"
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:shadow-glow hover:-translate-y-0.5 transition-all"
          data-aos="zoom-in"
        >
          <FaGithub /> Visit My GitHub <FaArrowRight className="text-sm" />
        </MagneticButton>
      </div>
    </section>
  );
};

export default GitHubStats;
