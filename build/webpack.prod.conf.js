const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('../config')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'I am production',
      filename: config.build.index,
      // template: 'index.html',
      inject: 'head',
      hash: true
    })
  ]
})

module.exports = devWebpackConfig