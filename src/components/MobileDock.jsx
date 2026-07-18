import React, { useState } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Code2, Github, Mail } from "lucide-react";

const items = [
  { to: "home", icon: Home, label: "Home" },
  { to: "about", icon: User, label: "About" },
  { to: "projects", icon: FolderGit2, label: "Projects" },
  { to: "skills", icon: Code2, label: "Skills" },
  { to: "github", icon: Github, label: "GitHub" },
  { to: "contact", icon: Mail, label: "Contact" },
];

/**
 * MobileDock
 * App-like glass navigation bar shown only on small screens.
 * Uses react-scroll spy to highlight the section in view, with a
 * framer-motion shared-layout pill that glides to the active tab.
 * Rendered only on the main page (sections don't exist on other routes).
 */
const MobileDock = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");

  if (location.pathname !== "/") return null;

  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200/70 dark:border-slate-700/60 shadow-lg">
        {items.map(({ to, icon: Icon, label }) => {
          const isActive = active === to;
          return (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              offset={-70}
              spy
              onSetActive={() => setActive(to)}
              className="relative flex items-center justify-center w-11 h-11 rounded-full cursor-pointer"
              aria-label={label}
            >
              {isActive && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 shadow-glow"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`relative z-10 w-5 h-5 transition-colors ${
                  isActive ? "text-white" : "text-slate-500 dark:text-slate-400"
                }`}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileDock;
