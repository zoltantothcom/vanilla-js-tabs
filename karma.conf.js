// Karma configuration
// Generated on Tue Feb 21 2017 14:28:05 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine-jquery", "jasmine", "karma-typescript"],

    // list of files / patterns to load in the browser
    files: [
      "src/*/*.ts",
      "test/*js",
      "dist/vanilla-js-tabs.js",
      "test/spec/*.ts",
      "node_modules/jquery/dist/jquery.min.js",
      "test/spec/fixtures/*.html",
      {
        pattern: "img/*.jpg",
        watched: false,
        included: false,
        served: true,
        nocache: false,
      },
    ],

    karmaTypescriptConfig: {
      transformPath: function (filepath) {
        return filepath.replace(/\.(ts|tsx)$/, ".js");
      },
    },

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/*/*.js": "coverage",
      "src/**/*.ts": ["karma-typescript"],
      "test/**/*.spec.ts": ["karma-typescript"],
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["spec", "coverage", "karma-typescript"],
    coverageReporter: {
      type: "lcov",
      dir: "coverage",
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
  });
};
