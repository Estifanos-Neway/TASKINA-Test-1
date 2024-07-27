/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE22',
        'secondary': '#FFD84D',
        'border': '#EEEEEE',
        'divider': "#CDCDCD",
        'text': '#1F2128',
      },
      boxShadow: {
        'custom-box': '0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.1)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

