import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // margin: 'auto'
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
        behind: '-1',
        0: '0',
        1: '1'
      }
    }
  },
  plugins: [],
}
export default config
