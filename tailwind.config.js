/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: {
        100: "#f7fafc",
        200: "#E8EAED",
        300: "#9AA0A6",
        700: "#38393C",
        800: "#202124",
        900: "#101112",
      },
      black: "#000",
      white: "#fff",
      primary: {
        100: "#D2E3FC",
        200: "#8AB4F8",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
