const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'I am development'
    })
  ]
})

module.exports = devWebpackConfig