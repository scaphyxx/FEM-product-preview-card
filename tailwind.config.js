/** @type {import(ctailwindcssc).Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      cream: "hsl(30, 38%, 92%)",
      darkCyan: "hsl(158, 36%, 37%)",
      darkBlue: "hsl(212, 21%, 14%)",
      darkGray: "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        fraunces: "'Fraunces', serif"
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
