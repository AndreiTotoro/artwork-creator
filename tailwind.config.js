/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				void: '#1A1737',
				midnight: '#191970',
			},
			height: {
				'9/10': '90%',
			},
			minHeight: {
				'1/10': '90vh',
			},
		},
	},
	plugins: [],
};
