/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F4CF63',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        'deep-bg': '#030303',
        luxury: '#0a0a0a',
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scroll-left 40s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
