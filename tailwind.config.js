/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f0ff",
          100: "#ece4ff",
          200: "#dacdff",
          300: "#c0a6ff",
          400: "#a473ff",
          500: "#8a3bff",
          600: "#8014ff",
          700: "#7300ff",
          800: "#6101d6",
          900: "#5103af",
          950: "#300077",
        },
        bgDark: "#1A0B28",
        white: "#FFFFFF",
        starColor: "#FFC700",
        black: "#000000",
        glass: "#E6D7E433",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
