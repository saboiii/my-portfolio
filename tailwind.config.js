/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        exgothic: ['ExGothic', 'sans-serif'],
        cairolight: ['CairoLight', 'sans-serif'],
        cairobold: ['CairoBold', 'sans-serif']
      },
    },
  },
  plugins: [],
}
