/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#121214",
        "gray-800": "#202024",
        "gray-400": "#7c7c8a",
        "gray-200": "#c4c4cc",
        "gray-100": "#e1e1ec",
        "cyan-500": "#81e8f7",
        "cyan-300": "#9be1fb",
      },
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
        "2xl": 32,
      },
    },
  },
  plugins: [],
};
