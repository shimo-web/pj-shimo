/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				wh: 'calc(100vh - 64px)',
				ch: 'calc(977px)',
			},
		},
	},
	plugins: [],
}
