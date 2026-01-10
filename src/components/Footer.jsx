import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

/**
 * Renders the site-wide footer.
 * (Scroll-to-top intentionally removed for clean UX)
 */
const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-blue-600 to-purple-600 
                 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 
                 text-white py-10"
    >
      <div className="container mx-auto text-center space-y-6">
        {/* Copyright */}
        <p className="text-sm dark:text-slate-300">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Rajeev Kumar</span>. All rights reserved.
        </p>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/file/d/1nmYVl1aisqBjl6LCm66PeUXBXxSC6SDO/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-white dark:bg-slate-100 
                     text-blue-700 hover:bg-blue-100 dark:hover:bg-slate-200 
                     font-semibold rounded-full transition"
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
            className="bg-white dark:bg-slate-700 text-gray-900 dark:text-white 
                       p-3 rounded-full shadow hover:bg-gray-200 
                       dark:hover:bg-slate-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rajeevkumar-nita"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-400 
                       p-3 rounded-full shadow hover:bg-blue-100 
                       dark:hover:bg-slate-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/rajeevbuilds"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
            className="bg-white dark:bg-slate-700 text-black dark:text-white 
                       p-3 rounded-full shadow hover:bg-gray-200 
                       dark:hover:bg-slate-600 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/rajeev_kmr77/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="bg-white dark:bg-slate-700 text-pink-500 dark:text-pink-400 
                       p-3 rounded-full shadow hover:bg-pink-100 
                       dark:hover:bg-slate-600 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:rajeev.nita2025@gmail.com"
            title="Email"
            className="bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 
                       p-3 rounded-full shadow hover:bg-green-100 
                       dark:hover:bg-slate-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
