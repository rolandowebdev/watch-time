/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'anek-telugu': ["'Anek Telugu'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('daisyui')],
};
