const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('../webpack.config');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '..', 'src')
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ['url-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ['url-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, '..',  'src'),
    hot: true,
    stats: { colors: true },
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),

      // Enables Webpack's Hot Module Replacement (HMR).
      new webpack.HotModuleReplacementPlugin()
  ]
});
