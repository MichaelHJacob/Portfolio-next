import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      square: {
        raw: "(min-aspect-ratio: 1/ 1) and (max-aspect-ratio: 20 / 13)",
      },
      "max-sm": { raw: "not all and (min-width: 640px)" },
      "max-md": { raw: "not all and (min-width: 768px)" },
      "max-lg": { raw: "not all and (min-width: 1024px)" },
      "max-xl": { raw: "not all and (min-width: 1280px)" },
      "max-2xl": { raw: "not all and (min-width: 1536px)" },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)"],
      },
      keyframes: {
        size: {
          "0%": { transform: "skewX(11deg) scaleX(1)" },
          "100%": { transform: "skewX(12deg) scaleX(3)" },
        },
        opacity: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "5%": { opacity: "0.01", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      animation: {
        size1: "size  10s ease-in-out infinite alternate",
        size2: "size  20s ease-in-out infinite alternate-reverse",
        size3: "size  30s ease-in-out infinite alternate",
        opacity: "opacity  2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
