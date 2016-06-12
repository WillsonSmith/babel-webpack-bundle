var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
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
