/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightblue :"#0077b6",
        ultralightblue:"#00b4d8",
        orange:"#80ed99",
        darkblue:"#03045e",
      },
    },
  },
  plugins: [],
}