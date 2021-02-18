// gulp 入口文件

exports.foo = done => {
  console.log('foo task working...')
  done() //标识任务完成
}
exports.default = done => {
  console.log('default task working...')
  done()
}
// 4.0之前版本使用方式，目前已经为导出模块的方式来实现
const gulp = require('gulp')
gulp.task('bar', done => {
  console.log('bar working...')
  done()
})
// yarn init --yes
// yarn add gulp --dev
// touch gulfile.js
// yarn gulp // 执行默认任务（yarn gulp default）
// yarn gulp foo
// yarn gulp bar
