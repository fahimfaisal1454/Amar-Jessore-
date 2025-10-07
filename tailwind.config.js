import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: "#FFD1DC",
        dustyrose: "#C28E8E",
        dustyroseDark: "#A46A6A",
        palegold: "#F0D9B5",
        palegoldDark: "#D1BA8E",
        cream: "#FFF9F0",
        textStrong: "#2E2E2E",
      },
    },
  },
  plugins: [daisyui],
};
