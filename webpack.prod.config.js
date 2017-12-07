const config = require('./webpack.config.js');
const webpack = require('webpack');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

config.plugins.push(
  new UglifyJsWebpackPlugin({
    sourceMap: true,
    uglifyOptions: {
      ie8: false,
      ecma: 5,
      compress: {
        warnings: false
      }
    }
  }),
  new CompressionWebpackPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|html|css)$/,
    threshold: 10240,
    minRatio: 0.8
  })
);

module.exports = config;