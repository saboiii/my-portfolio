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
        righteous: ['Righteous', 'sans-serif'],
        mavenmedium: ['Maven', 'sans-serif'],
        mavenbold: ['MavenBold', 'sans-serif'],
        josefinsansbold: ['JosefinSansBold', 'sans-serif'],
        josefinsanslight: ['JosefinSans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
