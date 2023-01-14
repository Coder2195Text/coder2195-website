/** @type {import("tailwindcss").Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "header": ["Manrope", "Helvetica", "Arial", "sans-serif"],
        "body": ["Manjari", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
  darkMode: "class"
})
