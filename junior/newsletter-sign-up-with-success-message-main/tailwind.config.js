/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      'body': ['"Roboto"', ...defaultTheme.fontFamily.sans]
    },
    extend: {},
  },
  plugins: [],
}

