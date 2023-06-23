module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
        black: '#000000',
        green: '#00FF00',
      },
      fontFamily: {
        heading: ['Arial', 'sans-serif'],
      },
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  variants: {},
  plugins: [],
};
