// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
        black: '#000000',
        green: '#00FF00',
      },
    },
  },
  variants: {},
  plugins: [],
};

