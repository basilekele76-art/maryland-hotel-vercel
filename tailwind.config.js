/** @type {import('tailwindcss').Config} */
moduleConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#064e3b',
          800: '#065f46',
        },
        gold: {
          500: '#d4af37',
          600: '#b8860b',
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
module.exports = moduleConfig
