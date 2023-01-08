/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      gray: {
        100: "#f7fafc",
        200: "#E8EAED",
        300: "#9AA0A6",
        400: "#6B7280",
        500: "#4B5563",
        700: "#38393C",
        800: "#202124",
        900: "#101112",
      },
      dark: "#17191B",
      black: "#000",
      white: "#fff",
      primary: {
        100: "#D2E3FC",
        200: "#8AB4F8",
        300: "#0E65F1",
        400: "#0B53D6",
        500: "#0A3FBF",
        600: "#082D9C",
        700: "#061D7A",
        800: "#04125A",
        900: "#001625",
      },
      cyan: {
        100: "#0EF1E3",
        200: "#0ED6C8",
      },
      pink: {
        100: "#EE3CF2",
      },
    },
    extend: {
      fontFamily: {
        modern: "TT Firs Neue",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
