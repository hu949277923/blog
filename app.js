const Koa = require('koa')
const render = require('koa-ejs')
// const path = require('path')
const { pathViews, pathPublic } = require('./config/index')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const about = require('./routes/about')
const newslistpic = require('./routes/newslistpic')
const apiNews = require('./api/news')
const error = require('./routes/error')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(pathPublic))
// app.use(require('koa-static')(__dirname + '/public'))

// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// }))
render(app, {
  // root: path.join(__dirname, 'views'),
  root: pathViews,
  layout: 'layout',
  viewExt: 'ejs',
  cache: false,
  debug: true
});
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  console.log('-----ctx.status---------------')
  console.log(ctx.status)

})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(about.routes(), about.allowedMethods())
app.use(newslistpic.routes(), newslistpic.allowedMethods())
app.use(error.routes(), error.allowedMethods())

app.use(apiNews.routes(), apiNews.allowedMethods())
// error-handling
app.on('error', async (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
