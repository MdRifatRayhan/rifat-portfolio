/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1c",
        surface: "#0f172a",
        primary: "#06b6d4", 
        secondary: "#3b82f6", 
        accent: "#10b981", 
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}