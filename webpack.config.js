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
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'css-loader',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/css/style.css', { allChunks: true }),
    new CleanWebpackPlugin(['./public'], { exclude: ['index.html'] }),
  ],
  watch: true,
};

