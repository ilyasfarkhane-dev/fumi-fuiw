/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#134f4b',
      },
      fontFamily: {
        'arabic': ['var(--font-arabic)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
