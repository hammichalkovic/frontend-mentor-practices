

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./build/*.html', './bulid/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

