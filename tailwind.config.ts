import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ss_mobile: "321px",
      MaxS_mobile: { max: "320px" },
      s_mobile: "445px",
      lg: "1024px",
      MaxLg: { max: "1024px" },
      md: "769px",
      MaxMd: { max: "768px" },
      Mobile: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      TabletPortrait: { max: "992px" },
      // => @media (min-width: 575px, max-width: 992px) { ... }

      TabletLandscape: { min: "992px" },
      // => @media (min-width: 992px) { ... }

      Laptop: { min: "923px", max: "1440px" },
      LaptopS: "1200px",
      MaxBlogGrid: { max: "1250px" },
      BlogGrid: { min: "992px", max: "1250px" },
      LaptopNoMin: { max: "1440px" },
      LaptopMin: { min: "1440px" },
    },
    extend: {
      colors: {
        green: "#26D07C",
        darkblue: "#002B49",
        blue: "#003C71",
        lightblue: "#0080AE",
        gray: "#BABEBF",
        darkgray: "#5F5F5F",
        lightgray: "#E7E9E7",
        white: "#FFFFFF",
      },
      dropShadow: {
        base: "0 0 25px #26D07C",
        black: "0 0 10px #AAAAAA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "circular-0-0-0-1": "cubic-bezier(0, 0, 0, 1)",
      },
      borderWidth: { "1": "1px" },
      fontFamily: {
        inter: 'Inter'
      },
    },
  },
  plugins: [],
};
export default config;
