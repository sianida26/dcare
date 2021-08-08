module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1c6e48'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-'
}
