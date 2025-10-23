import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';

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
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-gradient-to-r from-white via-white to-blue-100'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="bg-sky-700 text-white font-bold w-10 h-10 rounded-md flex items-center justify-center hover:scale-110 transition duration-300">
            R
          </div>
          <span className="text-xl sm:text-2xl font-semibold text-slate-800 hover:scale-105 transition duration-300">
            Rajeev Kumar
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-slate-700">
          {navItems.map(({ name, to }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              activeClass="text-sky-600 underline underline-offset-4"
              spy={true}
              offset={-70}
              className="cursor-pointer hover:text-sky-600 transition duration-300 hover:scale-105"
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-slate-700" />
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-6 bg-white shadow-xl rounded-lg p-4 md:hidden z-50 w-44">
            {navItems.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 text-base text-slate-800 hover:text-sky-600 transition"
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
