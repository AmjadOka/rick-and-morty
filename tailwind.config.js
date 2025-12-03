/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rick & Morty Theme Colors
        rm: {
          primary: "#00ffea", // Neon cyan for highlights
          secondary: "#ff6c00", // Orange accents
          background: "#0b0c10", // Dark background
          card: "rgba(0,0,0,0.3)", // Dark glass card bg
          alive: "#22c55e", // Alive green
          dead: "#ef4444", // Dead red
          unknown: "#9ca3af", // Unknown gray
        },
      },
    },
  },

  plugins: [],
};
