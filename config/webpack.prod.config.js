const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = require('../webpack.config');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: 'assets/js/[name].[chunkhash].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/images/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/fonts/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
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
  ]

});
