/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //key
      keyframes: {
        rotateIn: {
          "0%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(45deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        scale: {
          "0%": { transform: " scale(.5)" },
          "50%": { transform: " scale(1)" },
          "100%": { transform: "scale(.5)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      //ani
      animation: {
        rotateIn: " rotateIn 4s ease-in-out infinite ",
        scale: " scale 4s ease-in-out infinite ",

        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
