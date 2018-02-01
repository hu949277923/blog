const router = require('koa-router')()

// router.prefix('/about')

router.get('/about', async (ctx, next) => {
  await ctx.render('about', {
    title: 'Hello Koa 2!'
  })
})
router.get('/listpic', async (ctx, next) => {
  await ctx.render('listpic', {
    title: 'Hello Koa 2!'
  })
})

module.exports = router
