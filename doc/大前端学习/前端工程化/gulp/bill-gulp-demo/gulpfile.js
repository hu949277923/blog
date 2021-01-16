const { src, dest, parallel, series, watch } = require('gulp')
const del = require('del')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const swig = require('gulp-swig')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const bs = require('browser-sync')
const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}
const clearDir = () => {
  return del('dist')
}
const style = () => {
  return src('src/assets/styles/**/*.scss', { base: 'src' })
    .pipe(sass())
    .pipe(cleancss())
    .pipe(dest('dist'))
}
const script = () => {
  return src('src/assets/scripts/**/*.js', { base: 'src' })
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(dest('dist'))
}
const page = () => {
  return src('src/*.html', { base: 'src' })
    .pipe(swig({ data }))
    // .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
    .pipe(dest('dist'))
}
const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
}
const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(imagemin())
    .pipe(dest('dist'))
} 
const extra = () => {
  return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
} 
const server = () => {
  watch('src/assets/styles/**/*.scss', style)
  watch('src/assets/scripts/**/*.js', script)
  watch('src/*.html', page)
  watch('src/assets/images/**', image)
  watch('src/assets/fonts/**', font)
  watch('public/**', extra)
  bs.init({
    server: {
      baseDir: 'dist',
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}
const compile = parallel(style, script, page, image, font, extra)
const dev = series(compile, server)
module.exports = {
  compile,
  dev,
  clearDir
}