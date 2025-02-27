/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1E3A5F",
        secondary: "#7EC8E3",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

