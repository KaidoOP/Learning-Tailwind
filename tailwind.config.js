/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#00FFCA',
        'danger': '#D21312',
        'info': '#57C5B6',
      },
      margin: {
        '120': '2200px'
      },
      fontFamily: {
        main:['Montserrat'],
      },
    },
  },
  plugins: [],
}

