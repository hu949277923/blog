// src 创建读取流
// dest 创建写入流
// gulp-clean-css 清除css 空格及注释 插件
// gulp-rename // 重命名文件名

const { src, dest} = require('gulp')
const cleancss = require('gulp-clean-css')
const rename = require('gulp-rename')
exports.default = () => {
  return src('src/*.css')
    .pipe(cleancss())
    .pipe(rename({ extname: 'min.css'}))
    .pipe(dest('dist'))
}