/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },

      colors: {
        // primary: {
        //   DEFAULT: '#1C9E50',
        //   content: '#ffffff',
        //   focus: '#13572e',
        // },
        // secondary: {
        //   DEFAULT: '#FAC739',
        //   content: '#333333',
        //   focus: '#EDBD36',
        // },
        // accent: {
        //   DEFAULT: '#90BB17',
        //   content: '#ffffff',
        //   focus: ''
        // },
        // base: {
        //   content: '#333333',
        //   100: '#ffffff',
        //   200: '#F7F7F7',
        //   300: '#999999',
        //   400: '#666666',
        // },
        kid: {
          backgroud: '#673182',
          primary: {
            DEFAULT: '#9044B5',
            content: '#ffffff',
            focus: '#673182',
          },
          secondary: {
            DEFAULT: '#FAC739',
            content: '#9044B5',
            focus: '#ffffff',
          },
          accent: {
            DEFAULT: '#2B1436',
            content: '#ffffff',
            focus: '#160A1C',
          },
          base: {
            content: '#333333',
            100: '#ffffff',
            200: '#999999',
            300: '#666666',
          },
          'question-color': '#FF0000',
        },
      },

      backgroundImage: {
        'manner-secret': 'url("../assets/images/manners-secrets.png")',
        'kid-radial-gradient': 'radial-gradient(circle, #FAC739, #FAC73900 60%)',
        'kid-nojavan': 'url("../src/assets/images/background-nojavan.png")',
        'kid-question-bg': 'url("../src/assets/images/background-question-line.png")',
        'kid-question-tablet-bg': 'url("../src/assets/images/background-question-line-1024.png")'
      },


      fontFamily: {
        'yekanBakh': ['yekanBakh'],
      },

      backgroundSize: {
        'size-200': '200% 200%',
      },

      backgroundPosition: {
        'pos-0': '70% 70%',
        'pos-100': '100% 100%',
      },

      zIndex: {
        'full': '9999999',
      },

      aspectRatio: {
        '1.5/1': '1.5/1',
        'kid-1.5/1': '1.5/1',
        'kid-1/1.35': '1/1.35',
        'kid-logo': '5.7/1',
      },

      width: {
        '287': '72rem',
        '170': '42rem'
      },

      height: {
        '150': '38rem',
      },

      translate: {
        'kid-86': '21.5em',
      },

      spacing: {
        '126': '31rem',
        '116': '29rem'
      },

      outlineOffset: {
        '10': '1rem',
      }
    },
  },
  plugins: [],
}

