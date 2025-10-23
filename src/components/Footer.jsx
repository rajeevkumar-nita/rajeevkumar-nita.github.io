
import React, { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll-to-top button (floating) */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 bg-white text-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-100 transition-all"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-10">
        <div className="container mx-auto text-center space-y-6">
          {/* Copyright */}
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Rajeev Kumar</span>. All rights reserved.
          </p>

          {/* Resume CTA */}
          <a
            href="https://drive.google.com/file/d/1nmYVl1aisqBjl6LCm66PeUXBXxSC6SDO/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-white text-blue-700 hover:bg-blue-100 font-semibold rounded-full transition"
          >
            View My Resume 👨‍💻
          </a>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-lg mt-6">
            <a
              href="https://github.com/rajeevkumar-nita"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="bg-white text-gray-900 p-3 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeevkumar-nita"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="bg-white text-blue-700 p-3 rounded-full shadow hover:bg-blue-100 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rajeev_kmr77/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="bg-white text-pink-500 p-3 rounded-full shadow hover:bg-pink-100 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:rajeev.nita2025@gmail.com"
              title="Email"
              className="bg-white text-green-600 p-3 rounded-full shadow hover:bg-green-100 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
