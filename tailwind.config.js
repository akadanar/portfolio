/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        '23\%' : '23%',
        '3\%' : '3%',
        '12\%' : '12%'
      },
      size: {
        '30\%' : '30%'
      }
    },
  },
  plugins: [],
}

