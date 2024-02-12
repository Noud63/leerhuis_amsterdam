/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        papyrus: ['papyrus'],
      },
      screens: {
        
        calendar: "1160px",
        calendargrid: "890px",
        contact: "580px",
        xsm: "460px"
      },
    },
  },
  plugins: [],
};

