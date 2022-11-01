const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  // mode: 'jit',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-banner': "url('/src/assets/photos/profile-img.jpg')",
        'wink': "url('/src/assets/photos/logo.svg')"
       }),
      fontFamily: {
        sans: ["Circular", ...defaultTheme.fontFamily.sans]
      },
      } 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
