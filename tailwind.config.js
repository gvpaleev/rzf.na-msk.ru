/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      width: {
        128: '1340px',
      },
    },
    colors: {
      'primary-blue': '#204EE9',
      'primary-green': '#2CB742',
      'primary-grey': '#F1F2F6',
      'secondary-grey': '#939496',
      'secondary-blue': '#94afd7',
      white: '#FFFFFF',

      /**
       * Цвета раскрывающихся карточек на главной
       */

      /** Новичку */
      'card-green': '#55B959',
      'card-light-green': '#F2FFEE',

      /** Участнику */
      'card-blue': '#204EE9',
      'card-light-blue': '#E9F3FF',

      /** АН в обществе */
      'card-red': '#BE3C4C',
      'card-light-red': '#FFF3F3',
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
