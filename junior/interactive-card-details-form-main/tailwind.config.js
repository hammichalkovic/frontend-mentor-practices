

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        'gray-for-card': 'hsl(215, 11%, 75%)',
        'err-red': 'hsl(0, 100%, 66%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'light-grayish-violet': 'hsl(270, 3%, 80%)',
        'light-grayish-violet-brd': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(278, 68%, 11%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'dgv-color': 'hsl(279, 6%, 55%)',
    },
  },
  plugins: [],
}
};
