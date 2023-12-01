import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s_mobile: "445px",
      lg: "1024px",
      md: "768px",
      Mobile: { max: "575px" },
      // => @media (max-width: 575px) { ... }

      TabletPortrait: { max: "992px" },
      // => @media (min-width: 575px, max-width: 992px) { ... }

      TabletLandscape: "992px",
      // => @media (min-width: 992px) { ... }
    },
    extend: {
      colors: {
        green: "#26D07C",
        darkblue: "#002B49",
        blue: "#003C71",
        lightblue: "#0080AE",
        gray: "#BABEBF",
        lightgray: "#E7E9E7",
        white: "#FFFFFF",
      },
      dropShadow: {
        base: "0 0 25px #26D07C",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
