/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF5614',
        secondary: '#227f92',
        accent: '#2c2d6c',
        wine: '#64171E',
        charcoal: '#2B212A',
        sand: '#F2EBE1',
        aqua: '#A7CDD2',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        DEFAULT: '0.75rem',
      },
    },
  },
};