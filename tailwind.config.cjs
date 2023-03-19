/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        RobotoMono: ['Roboto Mono', "monospace"],
      },animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
       keyframes: {
        wiggle: {
          "0%": { color: "white" },
  "100%": { color: "red" }
        }
      }
      
  },
  plugins: [],
  
}