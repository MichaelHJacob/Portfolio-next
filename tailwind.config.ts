import type { Config } from "tailwindcss";
import tailwindcssAnimated from "tailwindcss-animated";
import tailwindcssIntersect from "tailwindcss-intersect";
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
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        opacityBlur: {
          "0%": {
            opacity: "0",
            filter: "blur(0px)",
          },
          "50%": {
            opacity: "0.3",
            filter: "blur(0px)",
          },
          "100%": {
            opacity: "0.3",
            filter: "blur(5px)",
          },
        },
      },
      animation: {
        opacityBlur: "opacityBlur  3s ease-in-out",
      },
      colors: {
        backgroundPrimary: "#1C1C1C", // Background principal
        backgroundSecondary: "#323233", // Background secundário e fundo de li estilizados dentro dos cards
        backgroundCard: "#232323", // Background de cards sobre o background secundário
        textPrimary: "#A3E635", // Texto do h1 e underline de links
        textSecondary: "rgba(251, 252, 253, 0.05)", // Texto do h2 com opacity de 5%
        textTertiary: "#FBFCFD", // Texto da maioria dos h3, p
        textSubTitle: "#909091", // Subtítulo do h3
      },
    },
  },
  plugins: [tailwindcssAnimated, tailwindcssIntersect],
};
export default config;
