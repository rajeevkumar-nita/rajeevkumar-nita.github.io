// import React, { useEffect } from 'react';
// import { useForm, ValidationError } from '@formspree/react'; 
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const [state, handleSubmit] = useForm("xpwkdroz"); 

//   if (state.succeeded) {
//     return (
//       <section
//         id="contact"
//         className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32"
//       >
//         <div className="container mx-auto px-4 text-center max-w-2xl">
//           <div className="bg-white p-8 rounded-lg shadow-md">
//             <h3 className="text-3xl font-bold text-sky-700 mb-4">Thanks for your message!</h3>
//             <p className="text-lg text-slate-600">I'll get back to you soon.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32"
//     >
//       <div className="container mx-auto px-4">
//         {/* Heading */}
//         <h2
//           className="text-4xl text-center font-bold text-sky-700 mb-10"
//           data-aos="fade-up"
//         >
//           Contact Me
//         </h2>

       
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
//           data-aos="fade-up"
//         >
//           <ValidationError 
//             errors={state.errors} 
//             className="bg-red-500 text-white text-center py-2 mb-6 rounded-md"
//           />

//           <div className="mb-6">
//             <input
//               type="text"
//               name="name" 
//               className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
//               placeholder="Your Name"
//               required
//             />
//             <ValidationError 
//               prefix="Name" 
//               field="name" 
//               errors={state.errors} 
//               className="text-red-600 text-sm mt-1"
//             />
//           </div>

//           <div className="mb-6">
//             <input
//               type="email"
//               name="email" 
//               className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
//               placeholder="Your Email"
//               required
//             />
//             {/* Field-specific error */}
//             <ValidationError 
//               prefix="Email" 
//               field="email" 
//               errors={state.errors} 
//               className="text-red-600 text-sm mt-1"
//             />
//           </div>

//           <div className="mb-6">
//             <textarea
//               name="message" 
//               className="w-full p-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
//               placeholder="Your Message"
//               rows="6"
//               required
//             />
//             {/* Field-specific error */}
//             <ValidationError 
//               prefix="Message" 
//               field="message" 
//               errors={state.errors} 
//               className="text-red-600 text-sm mt-1"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={state.submitting} 
//               className="w-full py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all
//                          disabled:bg-slate-400 disabled:cursor-not-allowed"
//             >
//               {state.submitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
//         </form>

//         <div
//           className="flex flex-wrap justify-center sm:flex-row sm:gap-6 gap-4 mt-10 text-sm sm:text-base"
//           data-aos="fade-up"
//         >
//           <a
//             href="https://www.linkedin.com/in/rajeevkumar-nita"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 bg-white text-sky-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 transition font-medium whitespace-nowrap"
//           >
//             <FaLinkedin className="text-lg" />
//             LinkedIn
//           </a>

//           <a
//             href="mailto:rajeev.nita2025@gmail.com"
//             className="flex items-center gap-2 bg-white text-sky-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 transition font-medium whitespace-nowrap"
//           >
//             <FaEnvelope className="text-lg" />
//             Email Me
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

/**
 * Renders the Contact section with a Formspree-integrated form.
 */
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Formspree hook to manage form state and submission
  const [state, handleSubmit] = useForm("xpwkdroz"); 

  // Renders a "Thank You" message upon successful form submission
  if (state.succeeded) {
    return (
      <section
        id="contact"
        // Section Container: Added dark mode gradient and text
        className="py-20 bg-gradient-to-b from-white to-[#eef2ff] dark:from-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-300 scroll-mt-32"
      >
        <div className="container mx-auto px-4 text-center max-w-2xl">
          {/* Success Card: Added dark mode background and border */}
          <div className="bg-white dark:bg-slate-800 dark:border dark:border-slate-700 p-8 rounded-lg shadow-md">
            {/* Success Title: Added dark mode text */}
            <h3 className="text-3xl font-bold text-sky-700 dark:text-sky-400 mb-4">Thanks for your message!</h3>
            {/* Success Text: Added dark mode text */}
            <p className="text-lg text-slate-600 dark:text-slate-400">I'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  // Renders the contact form
  return (
    <section
      id="contact"
      // Section Container: Added dark mode gradient and text
      className="py-20 bg-gradient-to-b from-white to-[#eef2ff] dark:from-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-300 scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Title: Added dark mode text */}
        <h2
          className="text-4xl text-center font-bold text-sky-700 dark:text-sky-400 mb-10"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        {/* Contact Form: Added dark mode background and border */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md dark:border dark:border-slate-700 hover:scale-[1.02] transition-transform duration-300"
          data-aos="fade-up"
        >
          {/* Formspree global errors */}
          <ValidationError 
            errors={state.errors} 
            className="bg-red-500 text-white text-center py-2 mb-6 rounded-md"
          />

          {/* Name Input */}
          <div className="mb-6">
            <input
              type="text"
              name="name" 
              // Input Field: Added dark mode background, border, text, and focus ring
              className="w-full p-4 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-slate-800"
              placeholder="Your Name"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name" 
              errors={state.errors} 
              className="text-red-600 text-sm mt-1"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <input
              type="email"
              name="email" 
              // Input Field: Added dark mode background, border, text, and focus ring
              className="w-full p-4 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-slate-800"
              placeholder="Your Email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email" 
              errors={state.errors} 
              className="text-red-600 text-sm mt-1"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <textarea
              name="message" 
              // Textarea: Added dark mode background, border, text, and focus ring
              className="w-full p-4 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 text-slate-800"
              placeholder="Your Message"
              rows="6"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message" 
              errors={state.errors} 
              className="text-red-600 text-sm mt-1"
            />
          </div>

          {/* Submit Button: Added dark mode focus ring */}
          <div className="text-center">
            <button
              type="submit"
              disabled={state.submitting} 
              className="w-full py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 transition-all
                         disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Quick Contact Buttons */}
        <div
          className="flex flex-wrap justify-center sm:flex-row sm:gap-6 gap-4 mt-10 text-sm sm:text-base"
          data-aos="fade-up"
        >
          {/* LinkedIn Button: Added dark mode background, text, border, and hover */}
          <a
            href="https://www.linkedin.com/in/rajeevkumar-nita"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-400 dark:border dark:border-slate-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 dark:hover:bg-slate-700 transition font-medium whitespace-nowrap"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>

          {/* Email Button: Added dark mode background, text, border, and hover */}
          <a
            href="mailto:rajeev.nita2025@gmail.com"
            className="flex items-center gap-2 bg-white dark:bg-slate-800 text-sky-700 dark:text-sky-400 dark:border dark:border-slate-700 px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-sky-100 dark:hover:bg-slate-700 transition font-medium whitespace-nowrap"
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