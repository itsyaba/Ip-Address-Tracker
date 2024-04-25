/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 59%)',
        'very-dark-gray': 'hsl(0, 0%, 17%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'nav-bg': "url('/images/pattern-bg.png')"
      } , 
      
    },

  },
  plugins: [],
}