import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'square' : { 'raw' : '(min-aspect-ratio: 1/ 1) and (max-aspect-ratio: 20 / 13)'},
      'max-sm' : { 'raw' : 'not all and (min-width: 640px)'},
      'max-md' : { 'raw' : 'not all and (min-width: 768px)'},
      'max-lg' : { 'raw' : 'not all and (min-width: 1024px)'},
      'max-xl' : { 'raw' : 'not all and (min-width: 1280px)'},
      'max-2xl' : { 'raw' : 'not all and (min-width: 1536px)'},
      ...defaultTheme.screens, 

    },
    extend: {
      fontFamily: {
        sans: ['var(--font-barlow)']
      }
    },
  },
  plugins: [],
}
export default config
