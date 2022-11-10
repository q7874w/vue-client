module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        phone: '768px',
        desktop: '1200px'
      },
      width: {
        main: '1170px'
      },
      colors: {
        black: {
          light: '#fdfbfc',
          dark: '#323323'
        },
        primary: {
          light: '#9764e9',
          dark: '#9764e9'
        }
      },
      borderColor: (theme) => ({
        primary: '#9764e9'
      }),
      textColor: {
        primary: '#9764e9',
        white: '#fdffff'
      },
      backgroundColor: (theme) => ({
        primary: '#9764e9',
        black: {
          light: '#fdfbfc',
          dark: '#000416'
        }
      }),
      fontFamily: {
        Arial: ['"Arial"'],
        'Arial-BoldMT': ['Arial-BoldMT']
      }
    }
  },
  variants: {
    extend: {}
  }
}
