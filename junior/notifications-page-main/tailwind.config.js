/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        'custom-red': 'hsl(1, 90%, 64%)',
        'custom-blue': 'hsl(219, 85%, 26%)',
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
      }
    },
  },
  plugins: [],
}

