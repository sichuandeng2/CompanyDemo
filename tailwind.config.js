module.exports = {
  // purge: [],
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dd:'bg-gray-300 h-1'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
