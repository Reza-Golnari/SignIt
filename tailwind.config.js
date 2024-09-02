/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#34495e",
        secondary: "#1abc9c",
        yellow: "#f1c40f",
        green: "#2ecc71",
        dark: {
          100: "#353b48",
          200: "#2f3640"
        },
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}