const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../webpack.config');


config.output = {
  filename: '[name].[hash].bundle.js',
  path: path.resolve(__dirname, '..', 'src')
};

config.devServer = {
  port: 3000,
  contentBase: path.join(__dirname, '..',  'src'),
  hot: true,
  stats: { colors: true },
  inline: true,
  historyApiFallback: true
};

config.plugins = config.plugins.concat([
  new ExtractTextPlugin('[name].[hash].css'),
  
    // Enables Webpack's Hot Module Replacement (HMR).
    new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
