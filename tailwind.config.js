module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontSize: {
        xs: ['10px', '14px'],
        sm: ['14px', '20px'],
      },

      extend: {
        colors: {
          "black": "#000000",
          "lightgrey": "#EAEAEA",
          "darkgrey": "#5C5C5C",
          "white": "#FFFFFF",
          "yellow": "#FBBD1F",
          "grey": "#3C3C3C"
        }
      },

      fontFamily: {
        "montserrat": ["Montserrat"]
      }
    },
    plugins: [],
  }