import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui({
			layout: {
				radius: {
					small: "8px", // rounded-small
					medium: "12px", // rounded-medium
					large: "16px", // rounded-large
				},
			},
			themes: {
				light: {
					colors: {
						white: "#fff",
						black: {
							main: "#000",
							dark: "#1C1C1C",
							light: "#2E343E",
						},
						red: {
							dark: "#FF3B30",
							light: "#FF453A",
						},
						orange: {
							dark: "#FF9500",
							light: "#FF9F0A",
							ultraLight: "#FFCB83",
						},
						yellow: {
							dark: "#FFCC00",
							light: "#FFD60A",
							ultraLight: "#FFE999",
						},
						mint: {
							dark: "#00C7BE",
							light: "#63E6E2",
							ultraLight: "#BAEDBD",
						},
						green: {
							dark: "#34C759",
							light: "#30D158",
							ultraLight: "#A1E3CB",
						},
						purple: {
							dark: "#AF52DE",
							light: "#BF5AF2",
							ultraLight: "#C6C7F8",
						},
						blue: {
							dark: "#007AFF",
							light: "#0A84FF",
							ultraLight: "#B1E3FF",
						},
					},
				},
			},
		}),
	],
};
