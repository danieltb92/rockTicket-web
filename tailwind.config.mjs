/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'jetbrains': ['JetBrains Mono', 'monospace'],
				'geist': ['Geist', 'sans-serif'],
				'geist-mono': ['Geist Mono', 'monospace'],
			},
			colors: {
				'primary': '#1e1e1e',
				'secondary': '#93C9C7',
				'tertiary': '#3e3e3e',
				'quaternary': '#4e4e4e',
				'quinary': '#5e5e5e',
				'senary': '#6e6e6e',
				'septenary': '#7e7e7e',
				'octonary': '#8e8e8e',
				'nonary': '#9e9e9e',
				'decenary': '#aeaeae',
			},
			screens: {
				'md': '769px',
			},
		},
	},
	plugins: [],
}
