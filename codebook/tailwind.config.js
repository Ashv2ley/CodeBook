/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#192535',
        lightBlue: '#7692FF',
        darkPurple: '#1F2041',
        lighterBlue: '#ABD2FA',
        purple: '#4B3F72',
        darkGrey: '#1E1E1E',
      },
      boxShadow: {
        'dark': '0 4px 1px rgba(0, 0, 0, 0.5)',  // Darker shadow
        'darker': '0 6px 0px rgba(0, 0, 0, 0.7)' // Even darker shadow
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Define the font family
      },
    },
  },
  plugins: [],
}
