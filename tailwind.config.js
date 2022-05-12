module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "Dark-Blue": "hsl(240, 38%, 20%)",
      "Grayish-Blue": "hsl(240, 18%, 77%)",
    },
    extend: {
      backgroundImage: {
        // prettier-ignore
        'quote': "url('/src/images/pattern-quotes.svg')",
        // prettier-ignore
        'curve': "url('/src/images/pattern-curve.svg')",
        // prettier-ignore
        'pattern': "url('/src/images/pattern-bg.svg')",
      },
    },
  },
  plugins: [],
};
