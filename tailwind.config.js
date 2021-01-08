module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelistPatterns: [/^(bg-)/, /^(text-)/, /^(w-)/, /^(noUi-)/]
    }
  },
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto'
      },
      fontFamily: {
        sans: ['Muli, sans-serif'],
        mono: ['Menlo, monospace'],
      },
      fontSize: {
        'root-em': '16px',
        xsmall: '.75rem',
        small: '1rem',
        regular: '1.2rem',
        large: '1.8rem',
      },
      spacing: {
        px: '1px',
        0: '0',
        4: '0.25rem',
        8: '0.5rem',
        16: '1rem',
        32: '2rem',
      },
      colors: {
        primary: {
          purple: '#639',
          purple1: '#020041',
          purple2: '#170387',
        },
        secondary: {
          pink: '#ff1ee5',
        },
        tertiary: {
          teal: '#74edf1',
        },
        nuetral: {
          white: '#fff',
          dark: '#333',
        }
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
