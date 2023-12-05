/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    fontFamily: {
      'body': ['"Roboto"', 'sans-serif']
    },
    colors: {
      'tomato': 'hsl(4, 100%, 67%)',
      'tomato-ht': 'hsla(4, 100%, 67%, 20%)',
      'dark-slate-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsla(231, 7%, 60%, 0.5)',
      'white': 'hsl(0, 0%, 100%)',
      'custom-gradient': 'linear-gradient(to right, #FF527B, #FF6A3A)',
      'transparent': 'hsla(0, 0%, 100%, 0)'
    },
    extend: {
      content: {
        'checkmark': 'url("./assets/images/icon-list.svg")',
      },
    },
    keyframes: {
      'bounce': {
        '0%': {
            transform: 'translateX(0px)',
            'timing-function': 'ease-in'
        },
        '37%': {
            transform: 'translateX(5px)',
            'timing-function': 'ease-out'
        },
        '55%': {
            transform: 'translateX(-5px)',
            'timing-function': 'ease-in'
        },
        '73%': {
            transform: 'translateX(4px)',
            'timing-function': 'ease-out'
        },
        '82%': {
            transform: 'translateX(-4px)',
            'timing-function': 'ease-in'
        },
        '91%': {
            transform: 'translateX(2px)',
            'timing-function': 'ease-in'
        },
        '96%': {
            transform: 'translateX(-2px)',
            'timing-function': 'ease-out' 
        },
        '100%': {
          transform: 'translateX(0px)',
          'timing-function': 'ease-in'
        }
      }
    },
    animation: {
      'bounce': 'bounce 0.5s',
    }
  },
  plugins: [],
}

