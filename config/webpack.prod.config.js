const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('../webpack.config');


config.output = {
  filename: 'assets/js/[name].[chunkhash].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, '..', 'dist')
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    // Set sourceMap to true if you would like to debug on production
    sourceMap: false,

    compress: {
      warnings: true
    }
  }),

  new ExtractTextPlugin('assets/css/[name].[chunkhash].css'),

  // Minifies all css assets loaded from the css-loader
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/,
    cssProcessorOptions: { discardComments: { removeAll: true } }
  })
]);

module.exports = config;
