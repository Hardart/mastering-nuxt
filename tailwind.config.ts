import type { Config } from 'tailwindcss'
module.exports = {
  content: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      colors: {
        slate: {
          900: '#0e1423',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
} satisfies Config
