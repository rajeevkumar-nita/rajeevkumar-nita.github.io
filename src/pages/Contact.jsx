
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('All fields are required.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setSuccess('Message sent successfully!');
    setTimeout(() => setSuccess(''), 3000);

    setMessage('');
    setName('');
    setEmail('');
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2
          className="text-4xl text-center font-bold text-sky-700 mb-10"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
        >
          {error && (
            <div className="bg-red-500 text-white text-center py-2 mb-6 rounded-md">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-500 text-white text-center py-2 mb-6 rounded-md">
              {success}
            </div>
          )}

          <div className="mb-6">
            <input
              type="text"
              className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
              placeholder="Your Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Quick Contact Buttons (inline for mobile) */}
        <div
          className="flex flex-wrap justify-center sm:flex-row sm:gap-6 gap-4 mt-10 text-sm sm:text-base"
          data-aos="fade-up"
        >
          <a
            href="https://www.linkedin.com/in/rajeevkumar-nita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-sky-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 transition font-medium whitespace-nowrap"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          <a
            href="mailto:rajeev.nita2025@gmail.com"
            className="flex items-center gap-2 bg-white text-sky-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 transition font-medium whitespace-nowrap"
          >
            <FaEnvelope className="text-lg" />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
