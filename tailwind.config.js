module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Gotu',
        ]
      },
      colors: {
        'brand': '#00CED1',
        'brand-dark': '#200530',
      },
      backgroundImage: {
        'cloth-pattern': 'url(/cloth.jpg)',
        'parallax-1': 'url(/palapa1.webp)',
        'parallax-2': 'url(/palapa2.jpg)',
      },
    },
    gradientColorStops: theme => ({
      primary: '#C90076',
      secondary: '#200530',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
