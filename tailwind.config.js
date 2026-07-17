// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         blob: "blob 7s infinite",
//       },
//       keyframes: {
//         blob: {
//           "0%": { transform: "translate(0px, 0px) scale(1)" },
//           "33%": { transform: "translate(30px, -50px) scale(1.1)" },
//           "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
//           "100%": { transform: "translate(0px, 0px) scale(1)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// }





/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // User's original content array
  ],
  darkMode: "class", // <-- This line enables dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          200: "#bcdcff",
          300: "#8ec5ff",
          400: "#59a4ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(at 20% 20%, rgba(124,58,237,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(37,99,235,0.35) 0px, transparent 50%), radial-gradient(at 60% 80%, rgba(14,165,233,0.30) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.5)",
        card: "0 10px 40px -15px rgba(30,64,175,0.25)",
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}