const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      paddding: '16px',
    },
    extend: {
      fontFamily: {
        'sans': ['Helvetica', ...defaultTheme.fontFamily.sans],
        'display': ['Playfair Display', ],
      },
      fontSize: {
        '2-5xl' : ['2.7rem',],
      },
      spacing: {
        '05' : ['0.18rem',],
        '16.5' : ['4.3rem',],
        '20.5' : ['5.5rem',],
        '100': ['26rem'],
      },
      // screens: {
      //   '2xl':'1320px',
      // },
    },
  },
  plugins: [],
}
