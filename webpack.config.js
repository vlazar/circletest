const webpackShared = require("./webpack.shared");

module.exports = Object.assign({}, webpackShared, {
  entry: {
    foo: "./index.js",
  },
});
