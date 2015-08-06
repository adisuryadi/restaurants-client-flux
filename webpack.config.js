var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],
  devtool: 'eval',
  output: {
    path: __dirname + '/build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  publicPath: '/assets/',
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'], exclude: /node_modules/ }
    ]
  }
};
