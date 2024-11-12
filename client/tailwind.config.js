/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#5681B9',
        'dark-blue': '#00142E',
        'light-gray': '#EBEBEB',
      },
    },
  },
  plugins: [],
}