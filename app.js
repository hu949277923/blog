const Koa = require('koa')
const render = require('koa-ejs')
const moment = require('moment')
// const path = require('path')
const { pathViews, pathPublic, sessionKey } = require('./config/index')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require("koa-session2")
const Store = require("./utils/store")

const index = require('./routes/index')
const about = require('./routes/about')
const newslistpic = require('./routes/newslistpic')
const apiNews = require('./api/news')
const apiUser = require('./api/user')
const error = require('./routes/error')

// 静态资源缓存中间件
const staticCache = require('koa-static-cache')
app.use(staticCache(pathPublic, {
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}))
// session 中间件
app.use(session({
  key: sessionKey,   //default "koa:sess"
  store: new Store()
}));
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
  cache: true,
  debug: false
});
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  ctx.state = Object.assign(ctx.state, { session: ctx.session, moment: moment});
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  console.log('-----ctx.status---------------')
  // ctx.set('ETag', '123')
  ctx.acceptsEncodings('gzip', 'deflate', 'identity');
  console.log(ctx.fresh);
  if (ctx.fresh) {
    ctx.status = 304
    return
  }
  // console.log(ctx.status)
  // ctx.render()
  await next()
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(about.routes(), about.allowedMethods())
app.use(newslistpic.routes(), newslistpic.allowedMethods())
app.use(error.routes(), error.allowedMethods())
// api
app.use(apiNews.routes(), apiNews.allowedMethods())
app.use(apiUser.routes(), apiUser.allowedMethods())
// error-handling
app.on('error', async (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
