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
        DEFAULT: "1.250rem",
      },
    },
    screens: {
      sm: "645px",
      md: "768px",
      lg: "1024px",
      xl: "1354px",
    },
  },
  plugins: [],
};
export default config;
