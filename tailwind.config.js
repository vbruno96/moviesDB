/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#1E1D20",
        'primary': "#0C9F7B",
        'accent': "#662CB2",
      },
    },
  },
  plugins: [],
}
