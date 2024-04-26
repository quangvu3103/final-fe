/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        '144': '40rem',
      },
      colors: {
        primary: '',
        secondary: '',
        tertiary: '',
        quaternary: '',
      },
      keyframes: {
        fadeScaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeScaleIn: 'fadeScaleIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
