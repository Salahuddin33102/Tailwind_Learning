/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/*/.{js,ts,jsx,tsx}",
		"./components/*/.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00AEEF",
				primaryHover: "#000",
				secondary: "#f8f8f8",
			},
			dropShadow: {
				boxShadow: "0 3px 3px rgba(0, 0, 0, 0.24)",
				btnShadow: "0 5px 15px rgba(0, 0, 0, 0.35)",
				chatPopupShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
			},
			backgroundImage: {
				"mbl-background": "url('/images/mblbackground.png')",
			},
		},
		fontFamily: {
			'noto': ['__Noto_Sans_7c0e9e'],
		}
	},
	plugins: [],
};