import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-base': '#1565D8',
        'primary-text': '#8692A6',
        'primary-secondary': '#BDBDBD',
        'primary-third': '#8692A6'
      },
      backgroundImage: {
        'frame-no-auth': "url('./src/assets/frame1.png')"
      }
    }
  },
  plugins: [typography, forms, aspectRatio]
}
