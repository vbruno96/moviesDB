/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': "#1E1D20",
      'primary': "#0C9F7B",
      'accent': "#662CB2",
    },
    extend: {},
  },
  plugins: [],
}
