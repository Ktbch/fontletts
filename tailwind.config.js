/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColorShade1': "#F9F9F9",
        'backgroundColorShade2': "#A4A4A4",
        'textColor1': '#212121',
        'textColor2': '#4E4E4E',
        'buttonColorBlue': '#20888F',
        'buttonColorBlack': '#303030',


      }
    },
  },
  plugins: [],
}

