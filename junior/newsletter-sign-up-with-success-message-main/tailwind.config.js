/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      'body': ['"Roboto"', 'sans-serif']
    },
    colors: {
      'tomato': 'hsl(4, 100%, 67%)',
      'dark-slate-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsla(231, 7%, 60%, 0.5)',
      'white': 'hsl(0, 0%, 100%)',
      'transparent': 'hsla(0, 0%, 100%, 0)'
    },
    extend: {
      content: {
        'checkmark': 'url("/assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
}

