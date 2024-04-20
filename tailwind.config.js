/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Oswald, ui-serif',
        platypi: ['Platypi', 'ui-serif'],  // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}