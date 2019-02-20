const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  output: {
    path: config.build.assetsRoot, // assetsRoot: path.resolve(__dirname, '../dist/staticCode')
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'I am production',
      filename: config.build.index, // path.resolve(__dirname, '../dist/indexCode.html')
      // template: 'index.html',
      inject: 'head',
      hash: true
    }),
    new ExtractTextPlugin({
      filename: 'css/app.min.css',
      allChunks: true
    })
  ]
})

module.exports = devWebpackConfig