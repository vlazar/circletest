const webpackShared = require("./webpack.shared");

module.exports = function(config) {
  config.set({
    browsers: ["Chrome"],

    frameworks: ["jasmine"],

    files: [
      "test/*_test.js",
      "test/**/*_test.js"
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      "test/*_test.js": ["webpack"],
      "test/**/*_test.js": ["webpack"]
    },

    // you don't need to specify the webpack "entry:" option here because
    // karma watches the test entry points
    // webpack watches dependencies
    webpack: webpackShared,

    // configuration for https://github.com/webpack/webpack-dev-middleware
    webpackMiddleware: {
      // display no info to console (only warnings and errors)
      noInfo: true,
      // turn off verbose output
      stats: {
        chunks: false
      }
    },

    plugins: [
      require("karma-chrome-launcher"),
      require("karma-webpack"),
      require("karma-jasmine"),
    ]
  });
};
