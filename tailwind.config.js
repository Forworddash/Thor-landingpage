module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.html'],
  theme: {
    extend: {
      colors: {
        red: '#FF0000',
        black: '#000000',
        green: '#00FF00',
        lavender: '#CCD6EB',
        mindaro: '#D7FFAB',
        deepPurple: '#4B0082',
        darkViolet: '#9400D3',
        darkBlue: '#355C7D',
        darkRed: '#6C5B7B',
        darkPink: '#C06C84',
        darkOrange: '#F67280',
        tan: '#F8B195',
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
      screens: {
        sm: '640px', // Small screens like smartphones
        md: '768px', // Medium screens like tablets
        lg: '1024px', // Large screens like laptops
        xl: '1280px', // Extra large screens like desktops
      },
    },
  },
  variants: {},
  plugins: [],
};
