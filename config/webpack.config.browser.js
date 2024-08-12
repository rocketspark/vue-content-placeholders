const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')
const path = require('path')

const outputFile = 'vue-content-placeholders'
const globalName = 'VueContentPlaceholders'

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.browser.js',
    library: globalName,
    libraryTarget: 'umd',
  },
  externals: {},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
      mangle: false,
    }),
  ],
})
