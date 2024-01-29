/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        papyrus: ["PAPYRUS"],
      },
      screens: {
        calendar: "850px",
        xsm: "460px"
      },
    },
  },
  plugins: [],
};

