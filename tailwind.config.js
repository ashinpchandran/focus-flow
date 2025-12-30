/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#6366f1',   // Indigo
          secondary: '#a855f7', // Purple
          accent: '#f43f5e',    // Rose
        }
      }
    },
  },
  plugins: [],
}

