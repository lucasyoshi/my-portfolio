/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 1s ease-out",
        fadeIn: "fadeIn 2s ease-in",
      },
      height: {
        screenMinusNavbar: "calc(100vh - 52px)",
      },
      colors: {
        jet: "#333333",
        turquoise: "#48E5C2",
        seasalt: "#FCFAF9",
      },
    },
  },
  plugins: [],
};
