/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        beth: ['var(--font-beth-ellen)'],
        bigshot: ['var(--font-bigshot-one)'],
        unna: ['var(--font-unna)'],
      },
    },
  },
  plugins: [],
};