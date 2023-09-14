/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,jsx,ts,tsx}',
    './pages/**/*.{vue,js,jsx,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      main: '#000',
      gray: '#b6b3b3',
      light: '#fff',
      'bg-main': '#fff',
      'bg-secondary': '#fafafa',
      'bg-footer': '#fafafa',
      'button-bg': '#000',
      'button-text': '#fff',
      'accent-primary': '#000',
      'accent-red': '#f82727',
      'border-primary': '#000',
      'border-light': '#ddd',
    },
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
