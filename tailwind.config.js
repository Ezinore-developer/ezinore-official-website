/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        'graybg' : '#0C0F0F',
        'primary-yellow' : '#F4B931'
      },
      fontFamily : {
        'supreme' : ['Supreme'] }
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar' : {
          'display' : 'none'
        },
        '.no-scrollbar' : {
          '-ms-overflow-style' : 'none',
          'scrollbar-width' : 'none'
        }
      })
    })
  ]
};