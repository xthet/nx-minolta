import type { Config } from "tailwindcss"
import { fxbx } from "./resources/constants/flexbox"

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				fonthd: ["var(--font-hd)", "sans-serif"],
			},
			colors: {
				pricol: "var(--pricol)",
				txtcol: "var(--txtcol)",
				seccol: "var(--seccol)",
				defcol: "var(--defcol)",
				subcol: "var(--subcol)",
			},
		},

		screens: {
			sm: "40rem",
			md: "50rem",
			lg: "64rem",
			xl: "80rem",
			"2xl": "96rem",
		},
	},
	plugins: [...fxbx],
} satisfies Config
