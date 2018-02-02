
const path = require('path')
module.exports = {
  path: path.join(__dirname, '../'), // 根目录
  pathViews: path.join(__dirname, '../', '/views'), // 模板目录
  pathPublic: path.join(__dirname, '../', '/public') // 静态文件目录
}