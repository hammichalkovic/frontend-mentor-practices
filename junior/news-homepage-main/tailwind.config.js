/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'offwhite': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)'
      }
    },
  },
  plugins: [],
}

