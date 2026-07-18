import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import MagneticButton from './MagneticButton';

/**
 * Renders the site-wide footer.
 * (Scroll-to-top intentionally removed for clean UX)
 */
const Footer = () => {
  return (
    <footer
      className="relative bg-slate-900 border-t border-white/10 text-white py-12 overflow-hidden"
    >
      {/* Subtle glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto text-center space-y-6">
        {/* Copyright */}
        <p className="text-sm text-slate-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Rajeev Kumar</span>. All rights reserved.
        </p>

        {/* Resume CTA */}
        <MagneticButton
          as="a"
          href="https://drive.google.com/file/d/1nmYVl1aisqBjl6LCm66PeUXBXxSC6SDO/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 bg-gradient-to-r from-sky-500 to-violet-500 
                     text-white hover:shadow-glow hover:-translate-y-0.5 
                     font-semibold rounded-full transition-all"
        >
          View My Resume 👨‍💻
        </MagneticButton>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-lg mt-6">
          <a
            href="https://github.com/rajeevkumar-nita"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="bg-white/10 border border-white/10 text-white 
                       p-3 rounded-full hover:bg-white/20 hover:-translate-y-1 
                       hover:shadow-glow transition-all"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rajeevkumar-nita"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="bg-white/10 border border-white/10 text-blue-400 
                       p-3 rounded-full hover:bg-white/20 hover:-translate-y-1 
                       hover:shadow-glow transition-all"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/rajeevbuilds"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
            className="bg-white/10 border border-white/10 text-white 
                       p-3 rounded-full hover:bg-white/20 hover:-translate-y-1 
                       hover:shadow-glow transition-all"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/code_with_rajeev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="bg-white/10 border border-white/10 text-pink-400 
                       p-3 rounded-full hover:bg-white/20 hover:-translate-y-1 
                       hover:shadow-glow transition-all"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:rajeev.nita2025@gmail.com"
            title="Email"
            className="bg-white/10 border border-white/10 text-green-400 
                       p-3 rounded-full hover:bg-white/20 hover:-translate-y-1 
                       hover:shadow-glow transition-all"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
