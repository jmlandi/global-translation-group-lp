/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#37a8af',
        support: '#DCF0FA',
        accent: '#F1742F',
      },
      fontFamily: {
        title: ['Lato', 'sans-serif'],
        body: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
