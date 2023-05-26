/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,jsx,ts,tsx}',
    './pages/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notosansjp: ['Noto Sans JP', 'sans-serif'],
      }
    },
    container: {
    }
  },
  plugins: [require("daisyui")],
}
