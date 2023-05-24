/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue": "hsl(220, 13%, 13%)",
				"dark-grayish-blue": "hsl(219, 9%, 45%)",
				"grayish-blue": "hsl(220, 14%, 75%)",
				"black-opacity-75": "hsla(0, 0%, 0%, 0.75)",
				"light-opacity": "hsla(0, 100%, 100%, 0.45)",
				"light-opacity-blur": "hsla(0, 100%, 100%, 0.7)",
				orange: "hsl(26, 100%, 55%)",
				"pale-orange": "hsl(25, 100%, 94%)",
			},
		},
	},
	plugins: [],
};
