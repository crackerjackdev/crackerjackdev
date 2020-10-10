module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
      ibm: ['"IBM Plex Sans", sans-serif'],
      "ibm-serif": ['"IBM Plex Serif", serif'],
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
    margin: ["last", "responsive", "first"],
  },
  plugins: [],
}
