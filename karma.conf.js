var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    /* Comment browsers and singleRun above and
    uncomment these two lines below to debug test */
    //browsers: ['Chrome'],
    //singleRun: false,

    frameworks: [ 'jasmine' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'dots' ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel?optional[]=runtime&stage=0', exclude: /node_modules/ }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
