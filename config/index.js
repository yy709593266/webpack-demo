const path = require('path')

module.exports = {
  dev: {},
  build: {
    assetsRoot: path.resolve(__dirname, '../dist/staticCode'), // 打包后的文件夹
    index: path.resolve(__dirname, '../dist/indexCode.html') // 打包后的indexCode.html入口文件直属于dist路径
  }
}