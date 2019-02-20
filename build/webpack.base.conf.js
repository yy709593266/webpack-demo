const path = require('path')
const config = require('../config')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    path: config.build.assetsRoot, // assetsRoot: path.resolve(__dirname, '../dist/staticCode')
    filename: '[name].js'
  }
}