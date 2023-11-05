/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-0.5px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(1px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-2px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(2px, 0, 0)'
          }
        }
      },

      fontFamily: {
        averiabold: ['AveriaBold', 'serif'],
        averiaregular: ['AveriaRegular', 'serif'],
        pridilight: ['PridiLight', 'serif'],
        pridimed: ['PridiMed', 'serif'],
        taviraj: ['Taviraj', 'serif']
      },
    },
  },
  plugins: [],
}
