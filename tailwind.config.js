const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  mode: 'jit',
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
