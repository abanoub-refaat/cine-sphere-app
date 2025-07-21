/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        dark: "#1A0B28",
        white: "#FFFFFF",
        starColor: "#FFC700",
        black: "#000000",
        glass: "#0f0b0e33",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
