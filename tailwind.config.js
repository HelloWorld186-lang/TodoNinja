/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'special_dark' : 'rgb(18,23,22)',
        'special_green' : 'rgb(146,255,216)',
        'special_red' : 'rgb(234,90,90)',
        'special_text' : 'rgb(24, 31, 30)',
        'special_light' : 'rgb(85,97,95)'
      }
    },
  },
  plugins: [],
}

