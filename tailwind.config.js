module.exports = {
  // important: true,
  content: ["./*.html"],
  theme: {
    screens: {
      tablet: "750px",
      desktop: "992px",
    },
    extend: {
      colors: {
        red: {
          DEFAULT: "#BE0A0A",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#D34F45",
          500: "#CE3530",
          600: "#BE0A0A",
          700: "#FFFFFF",
          800: "#8C0909",
          900: "#640A0A",
        },
        gray: {
          DEFAULT: "#333333",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#E1E1E1",
          300: "#FFFFFF",
          400: "#A7A7A7",
          500: "#808080",
          600: "#4D4D4D",
          700: "#FFFFFF",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        main: "Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        // main: "'Alliance No.1', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
