
const router = require('koa-router')()

const News = require('../models/news')

router.prefix('/api')

router.post('/createNews', async (ctx, next) => {
  console.log(ctx.request.body)
  const req = ctx.request.body
  req.category = '5a605b54d99fa61220cae490'
  req.userId = '5a605b54d99fa61220cae490'
  const res = await News.addNews(req)
  ctx.body = {
    code: 200,
    message: res
  }
  
})
module.exports = router
