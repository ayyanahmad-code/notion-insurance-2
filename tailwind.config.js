// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#1e3a8a',
//         secondary: '#3b82f6',
//         accent: '#f59e0b',
//       },
//       fontFamily: {
//         sans: ['Inter', 'system-ui', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#2563eb",
        accent: "#06b6d4",
        light: "#f8fafc",
        card: "#ffffff",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        glow: "0 10px 30px rgba(37,99,235,.25)",
        card: "0 8px 30px rgba(0,0,0,.06)"
      }
    },
  },
  plugins: [],
};