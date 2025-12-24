/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',   // blue-600
        accent: '#fbbf24',    // amber-400
        neutral: '#1f2937',   // gray-800
        light: '#f3f4f6',     // gray-100
      },
    },
  },
  plugins: [],
};