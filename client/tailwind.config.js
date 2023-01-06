module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        "customBG-white": "#fbfbfb",
      },
      boxShadow: {
        "custom-shadow-green": "0px 0px 5px 2px #63aeae",
      },
      textColor: {
        "custom-text-gray": "#535353",
      },
      fontFamily: {
        shinb: ["shinbttf"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
