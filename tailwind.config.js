/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // এটি নিশ্চিত করুন
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00f2fe", 
        secondary: "#7000ff", 
        dark: "#05060f",
      },
    },
  },
  plugins: [],
}