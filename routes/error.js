const router = require('koa-router')()

router.get('/404', async (ctx, next) => {
  await ctx.render('404', {
    title: 'Hello Koa 2!'
  })
})

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
