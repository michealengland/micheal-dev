/**
 * Tailwind configuration overrides.
 *
 * Note: Some areas may not require override and rely on Tailwind defaults.
 *
 * @see screen   defaults {@link https://tailwindcss.com/docs/breakpoints}
 * @see spacing  defaults {@link https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale}
 * @see fontSize defaults {@link https://tailwindcss.com/docs/font-size}
 */
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
        sans: ['Mulish, sans-serif'],
        mono: ['Fira Code, monospace']
      },
      colors: {
        primary: {
          purple: '#639',
          purple1: '#020041',
          purple2: '#170387'
        },
        secondary: {
          pink: '#ff1ee5'
        },
        tertiary: {
          teal: '#74edf1'
        },
        nuetral: {
          white: '#fff',
          dark: '#333'
        }
      },
      zIndex: {
        behind: -1,
        0: 0,
        1: 1
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
