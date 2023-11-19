import type {Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#703434",
      },
    },
    boxShadow: {
      md: "0px -4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    fontFamily: {inter: ["'Inter'", ...fontFamily.sans]},
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
