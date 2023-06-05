/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "logo" : "url('../public/assets/logo.png')"
      },
      backgroundColor  : {
        "primary" : "#005587"
      },
      fontFamily : {
        "inter" : 'Inter'
      }
    },
  },
  plugins: [],
}

