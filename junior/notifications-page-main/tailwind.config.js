/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-red': 'hsl(1, 90%, 64%)',
        'custom-blue': 'hsl(213, 83%, 30%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'vlg-blue': 'hsl(210, 60%, 98%)',
        'lg-blue-1': 'hsl(211, 68%, 94%)',
        'lg-blue-2': 'hsl(205, 33%, 90%)',
        'grayish-blue': 'hsl(219, 14%, 63%)',
        'dark-grayish-blue': 'hsl(219, 12%, 42%)',
        'very-dark-blue': 'hsl(224, 21%, 14%)'
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      },
      keyframes: {
        'change-scale': {
        '0%': {transform: 'scaleY(100%)'},
        '50%': {transform: 'scaleY(0%)'},
        '100%': {transform: 'scaleY(100%)'},
      },
    },
    animation: {
      'change-scale': 'change-scale 0.3s ease-in-out'
    }
  },
  plugins: [],
},
}
