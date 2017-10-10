'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    filename: './src/js/app.jsx',
  },
  output: {
    filename: './public/js/bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/css/style.css', { allChunks: true }),
    new CleanWebpackPlugin(['./public'], { exclude: ['index.html', 'bootstrap.min.css', 'bootstrap.min.js'] }),
  ],
  watch: true,
};

