/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DBE2EF",
        secondary: "#F9F7F7",
        ascent: "#112D4E",
        hover: "#3F72AF",
        background1: "#dedede",
        background2: "#e8e9ed",
      },
      backgroundImage: {
        fb1: "url('/feedback/fb1.jpg')",
        fb2: "url('/feedback/fb2.jpg')",
        fb3: "url('/feedback/fb3.jpg')",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 1s ease-out forwards",
        slideInRight: "slideInRight 1s ease-out forwards",
        slideInBottom: "slideInBottom 1s ease-out forwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
