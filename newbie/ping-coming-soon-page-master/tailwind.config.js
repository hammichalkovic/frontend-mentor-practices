/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      'body': ['"Libre Franklin"', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      'gray-transparent': 'hsla(0, 0%, 59%, 90%)',
      'gray': 'hsl(0, 0%, 59%)',
      'very-dark-blue': 'hsl(209, 33%, 12%)',
      'light-red': 'hsl(354, 100%, 66%)',
      'pale-blue': 'hsl(223, 100%, 88%)',
      'pale-blue-transparent': 'hsla(223, 100%, 88%, 50%)',
      'blue': 'hsl(223, 87%, 63%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    extend: {},
  },
  plugins: [],
}

