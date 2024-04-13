/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],  
  theme: {
    extend: {
      gridTemplateColumns: {
        'auth-layout': '3fr 2fr'
      }
    },
  },
  plugins: [],
}

