/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        secondary: "#1f1f1f",
        accent: "#ff4d4d",
      },
    },
  },
  plugins: [],
}
