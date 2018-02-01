const router = require('koa-router')()

// router.prefix('/newslistpic')

router.get('/newslistpic', async (ctx, next) => {
  await ctx.render('newslistpic', {
    title: 'Hello Koa 2!'
  })
})
router.get('/picInfo/:id', async (ctx, next) => {
  await ctx.render('picInfo', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
