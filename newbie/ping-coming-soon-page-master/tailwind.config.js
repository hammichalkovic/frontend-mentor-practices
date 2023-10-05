/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      'body': ['"Libre Franklin"', 'sans-serif']
    },
    colors: {
      'gray': 'hsl(0, 0%, 59%)',
      'very-dark-blue': 'hsl(209, 33%, 12%)',
      'light-red': 'hsl(354, 100%, 66%)',
      'pale-blue': 'hsl(223, 100%, 88%)',
      'blue': 'hsl(223, 87%, 63%)'
    },
    extend: {},
  },
  plugins: [],
}

