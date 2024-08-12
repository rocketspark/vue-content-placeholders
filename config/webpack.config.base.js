const {DefinePlugin} = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const outputFile = 'vue-content-placeholders'
const config = require('../package.json')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: MiniCssExtractPlugin.loader,
            sass: MiniCssExtractPlugin.loader,
            scss: MiniCssExtractPlugin.loader,
          },
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      VERSION: JSON.stringify(config.version),
    }),
    new MiniCssExtractPlugin({
      filename: outputFile + '.css',
    }),
    new ESLintPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue'], // Add your extensions here.
  },
}
