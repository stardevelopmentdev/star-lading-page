/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "star-pink": "#FF8AAE",
        "star-pink-light": "#FFD2E0",
        "star-gray-light": "#F9F9F9",
        "star-gray": "#EBEBEB",
        "star-gray-dark": "#333333",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
