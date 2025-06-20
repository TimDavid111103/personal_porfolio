import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(circle at center, var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
