const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['Fraunces', ...defaultTheme.fontFamily.sans],
        barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
      }, 
      colors: {
        'custom-soft-red': 'hsl(7, 99%, 70%)',
        'custom-yellow': 'hsl(51, 100%, 49%)',
        'custom-dark-cyan': 'hsl(167, 40%, 24%)',
        'custom-dark-blue': 'hsl(198, 62%, 26%)',
        'custom-moderate-cyan': 'hsl(168, 34%, 41%)',
        'custom-very-dark-blue': 'hsl(212, 27%, 19%)',
        'custom-very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
        'custom-dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'custom-grayish-blue': 'hsl(210, 4%, 67%)',
      },
    },
  },
  plugins: [],
}

