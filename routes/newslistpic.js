const router = require('koa-router')()

const Ips = require('../models/ips')
const News = require('../models/news')
// const marked = require('../public/javascripts/marked')
const MarkdownIt = require('markdown-it'),
md = new MarkdownIt()
const checkLogin = require('../middlewares/check.js').checkLogin

// router.prefix('/newslistpic')

router.get('/newslistpic', async (ctx, next) => {
  // let pageStart = 1;
  let page = ctx.query.page ? parseInt(ctx.query.page) : 1
  let pageSize = ctx.query.pageSize ? parseInt(ctx.query.pageSize) : 6
  
  let totalPage = await News.getTotalCount()
  totalPage = Math.ceil(totalPage / pageSize)
  console.log(page)
  console.log(totalPage)
  let pagePrev = page <= 1 ? 1 : page - 1
  let pageNext = page >= totalPage ? totalPage : page + 1

  const newsList = await News.getNewsList({ pageStart: page, pageSize: pageSize })
  
  console.log(`-----totalPage:${totalPage}--`)
  await ctx.render('newslistpic', {
    newsList: newsList,
    page: page,
    pagePrev: pagePrev,
    pageNext: pageNext,
    totalPage: totalPage,
    pageSize: pageSize
  })
})
router.get('/picInfo/:id', async (ctx, next) => {
  console.log('-----ctx.ip------')
  let ipStr = ctx.ip.split(":")
  ipStr = ipStr[ipStr.length - 1]
  const ip = await Ips.findIp({'ip': ipStr, 'articleId': ctx.params.id})
  console.log(ip)
  if (!ip) {
    await Ips.createIp({'ip': ipStr, 'articleId': ctx.params.id})
    // 用户访问pv+1
    await News.incPv(ctx.params.id)
  }
  
  const info = await News.getNewsDetailById(ctx.params.id)
  // let data = fs.readFileSync('./test.md')
  // info.content = marked(data.toString())
  info.content = md.render(info.content)
  await ctx.render('picInfo', {
    info: info
  })
})
router.get('/addNews', async (ctx, next) => {
  await checkLogin(ctx)
  await ctx.render('addNews')
})
module.exports = router
