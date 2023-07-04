module.exports = {
  env: {
    node: true,
  },
  parser: ["babel-eslint","@babel/eslint-parser"],
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
  plugins: [ "babel", "@babel"]
};