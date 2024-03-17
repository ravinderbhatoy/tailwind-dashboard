/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/hero-image.jpg')",
        'wind-pattern': "url('../assets/wind-pattern.jpg')",
      }
    },
  },
  plugins: [],
}
