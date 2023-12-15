/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'san-serif'],  
      },
      colors: {
        'offwhite': 'hsl(0, 0%, 94%)',
        'lightgrey': 'hsl(0, 0%, 86%)',
        'smokeygrey': 'hsl(0, 1%, 44%)',
        'offblack': 'hsl(0, 0%, 8%)',
        'purple': 'hsl(259, 100%, 65%)',
        'lightred': 'hsl(0, 100%, 67%)'
      }
    },
  },
  plugins: [],
}

