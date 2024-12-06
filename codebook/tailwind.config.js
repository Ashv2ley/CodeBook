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
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Define the font family
      },
    },
  },
  plugins: [],
}
