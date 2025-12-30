/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
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
