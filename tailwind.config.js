/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
}
