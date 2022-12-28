/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html", "public/*.js", "./src/*.css"],
  theme: {
    extend: {
      colors: {
        soft_blue: "hsl(231, 69%, 60%)",
        soft_red: "hsl(0, 94%, 66%)",
        grayish_blue: "hsl(229, 8%, 60%)",
        very_dark_blue: "hsl(229, 31%, 21%)",
      },

      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
}
