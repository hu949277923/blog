const router = require('koa-router')()

const News = require('../models/news')
// router.prefix('/newslistpic')

router.get('/newslistpic', async (ctx, next) => {
  await ctx.render('newslistpic', {
    title: 'Hello Koa 2!'
  })
  next()
})
router.get('/picInfo/:id', async (ctx, next) => {
  console.log(ctx.params.id)
  const info = await News.getNewsDetailById(ctx.params.id)
  console.log(info)
  await ctx.render('picInfo', {
    info: info
  })
})

module.exports = router
