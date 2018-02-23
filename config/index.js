
const path = require('path')
module.exports = {
  sessionKey:'blog',
  sessionMaxAge: 2592000000,
  sessionSecret: 'blog',
  path: path.join(__dirname, '../'), // 根目录
  pathViews: path.join(__dirname, '../', '/views'), // 模板目录
  pathPublic: path.join(__dirname, '../', '/public') // 静态文件目录
}