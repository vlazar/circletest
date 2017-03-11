// Shared Webpack configuration for webpack.config.js and karma.conf.js

const path = require("path");
const webpack = require("webpack");
const pckg = require("./package.json");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `[name].${pckg.version}.js`,
  },
};
