/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#749b3f",
        secondary:"#FF6A1A"
      }
    },
  },
  plugins: [],
}