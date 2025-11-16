import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, Moon, Sun } from 'lucide-react'; // 1. IMPORT MOON AND SUN
import { useTheme } from '../context/ThemeContext'; // 2. IMPORT YOUR THEME HOOK

const navItems = [
  { name: 'Home', to: 'home' },
  { name: 'About Me', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Responsibility', to: 'responsibility' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 3. GET THEME STATE AND TOGGLE FUNCTION
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md dark:bg-slate-900/80 dark:border-b dark:border-slate-700' // 4. ADDED DARK CLASSES
          : 'bg-gradient-to-r from-white via-white to-blue-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800' // 5. ADDED DARK CLASSES
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="bg-sky-700 text-white font-bold w-10 h-10 rounded-md flex items-center justify-center hover:scale-110 transition duration-300">
            R
          </div>
          <span className="text-xl sm:text-2xl font-semibold text-slate-800 hover:scale-105 transition duration-300 dark:text-slate-200"> {/* 6. ADDED DARK CLASS */}
            Rajeev Kumar
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-700 dark:text-slate-300"> {/* 7. ADDED DARK CLASS & items-center */}
          {navItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              activeClass="text-sky-600 dark:text-sky-400 underline underline-offset-4" // 8. ADDED DARK CLASS
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-sky-600 dark:hover:text-sky-400 transition duration-300 hover:scale-105" // 9. ADDED DARK CLASS
            >
              {name}
            </Link>
          ))}
          
          {/* 10. ADDED THEME TOGGLE BUTTON (DESKTOP) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-slate-700" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button & Toggle */}
        <div className="md:hidden flex items-center gap-4"> {/* 11. ADDED WRAPPER */}
          
          {/* 12. ADDED THEME TOGGLE BUTTON (MOBILE) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-sky-100 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
          
          <button
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" /> {/* 13. ADDED DARK CLASS */}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-xl rounded-lg p-4 md:hidden z-50 w-44 dark:bg-slate-800 dark:border dark:border-slate-700"> {/* 14. ADDED DARK CLASSES */}
            {navItems.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 text-base text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition" // 15. ADDED DARK CLASSES
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


