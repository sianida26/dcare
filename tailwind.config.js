module.exports = {
  purge: {
    content: [
      './resources/**/*.blade.php',
      './resources/**/*.js',
      './resources/**/*.jsx',
    ],
    safelist: [
      'tw-list-decimal',
      'tw-list-inside',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1c6e48'
      },
      maxWidth: {
        '1/4' : '25%',
        '3/4' : '75%',
      },
      minHeight:{
        '60' : '5rem',
      },
      minWidth: {
        '1/4' : '25%',
        '3/4' : '75%',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
  prefix: 'tw-'
}
