import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ubuntumono)', 'sans-serif'],
      },

      colors:{
        blueberry: {
          300: '#323842',
          600: '#151A2A',
          900: '#07061D'
        },
        background: '#030712',
        pistachio: '#D3FFCC',
        cream: '#E2DFCD', 
        foam: '#D7DAE2',
        snow: '#FFFFFF', 
        candy: {
          50: '#e6f6f4',
          100: '#d9f2ef',
          200: '#b0e4dd',
          300: '#00a991',
          400: '#009883',
          500: '#008774',
          600: '#007f6d',
          700: '#006557',
          800: '#004c41',
          900: '#003b33',
        },
        gum: {
          50: '#fff2f9',
          100: '#ffebf6',
          200: '#fed5ed',
          300: '#fd78c4',
          400: '#e46cb0',
          500: '#ca609d',
          600: '#be5a93',
          700: '#984876',
          800: '#723658',
          900: '#592a45',
        },
        lime: {
          50: '#eaffe7',
          100: '#e0ffda',
          200: '#beffb3',
          300: '#2dff0b',
          400: '#29e60a',
          500: '#24cc09',
          600: '#22bf08',
          700: '#1b9907',
          800: '#147305',
          900: '#105904',
        },
      }
    },
  },
  plugins: [],
}

export default config
