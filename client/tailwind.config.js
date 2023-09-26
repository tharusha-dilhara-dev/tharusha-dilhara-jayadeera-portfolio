/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ph: ['Space Grotesk', 'sans-serif'],
        ro: ['Roboto', 'sans-serif']
        
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 55s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }    
    },
  },
  plugins: [require('tailwind-scrollbar')],
}