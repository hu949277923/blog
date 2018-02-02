const router = require('koa-router')()

const News = require('../models/news')
// const marked = require('../public/javascripts/marked')
const MarkdownIt = require('markdown-it'),
md = new MarkdownIt();

// router.prefix('/newslistpic')

router.get('/newslistpic', async (ctx, next) => {
  await ctx.render('newslistpic', {
    title: 'Hello Koa 2!'
  })
})
router.get('/picInfo/:id', async (ctx, next) => {
  console.log(ctx.params.id)
  const info = await News.getNewsDetailById(ctx.params.id)
  // let data = fs.readFileSync('./test.md')
  // info.content = marked(data.toString())
  info.content = md.render(info.content)
  await ctx.render('picInfo', {
    info: info
  })
})
router.get('/addNews', async (ctx, next) => {
  await ctx.render('addNews')
})
module.exports = router
