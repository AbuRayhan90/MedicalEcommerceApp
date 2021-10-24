module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "extra-line-height": "150px",
      },
      backgroundImage: {
        "offer-bg": "url('./assets/img/banner-bg-12.jpg')",
        "courier-bg": "url('./assets/img/banner-delivery-2.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
