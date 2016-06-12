var path = require('path');
var webpack = require('webpack');

module.exports = {
  // for polyfill
  // entry: ['babel-polyfill', './src/app.js'],
  entry: ['./src/app.js'],
  output: {path: __dirname + '/js', filename: 'build.js'},
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
