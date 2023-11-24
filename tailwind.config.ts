import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'Mobile': {'max': '575px'},
			// => @media (max-width: 575px) { ... }

			'TabletPortrait': {'max':'992px'},
			// => @media (min-width: 575px, max-width: 992px) { ... }

			'TabletLandscape': '992px',
			// => @media (min-width: 992px) { ... }
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