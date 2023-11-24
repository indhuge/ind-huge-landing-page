import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'mobile': {'max': '640px'},
			// => @media (min-width: 640px) { ... }

			'tablet': {'max': '1079px'},
			// => @media (min-width: 1024px) { ... }

			'desktop': '1080px',
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				green: "#00D272",
				darkblue: "#002748",
				blue: "#003973",
				lightblue: "#0060AE",
				gray: "#BABFC0",
				lightgray: "#E7EAE8",
				white: "#FFFFFF",
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
