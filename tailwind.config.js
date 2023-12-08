/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lime': '#DAFF7D',
      'blueElectric': '#4056F4',
      'blueMidnight': '#171738',
      'orange': '#FF4A1C',
      'pink': '#FFAFC5',
      'white': '#FFFFFF',
      'grey': '#F4F4F4',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

