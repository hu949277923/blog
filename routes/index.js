const router = require('koa-router')()
const newsList = [
  {
    'id': 1,
    'createTime': '2017-10-13',
    'author': 'bill',
    'blogUrl': '#',
    'title': '【从前端菜鸟到大神】一片总结的很好的文章',
    'desc': '结合个人经历总结的前端入门方法，总结从零基础到具备前端基本技能的道路、学习方法、资料。由于能力有限，不能保证面面俱到，只是作为入门参考，面向初学者，让初学者少走弯路。'
  },
  {
    'id': 1,
    'createTime': '2017-10-13',
    'author': 'bill',
    'blogUrl': '#',
    'title': '【从前端菜鸟到大神】一片总结的很好的文章',
    'desc': '结合个人经历总结的前端入门方法，总结从零基础到具备前端基本技能的道路、学习方法、资料。由于能力有限，不能保证面面俱到，只是作为入门参考，面向初学者，让初学者少走弯路。'
  },
  {
    'id': 1,
    'createTime': '2017-10-13',
    'author': 'bill',
    'blogUrl': '#',
    'title': '【从前端菜鸟到大神】一片总结的很好的文章',
    'desc': '结合个人经历总结的前端入门方法，总结从零基础到具备前端基本技能的道路、学习方法、资料。由于能力有限，不能保证面面俱到，只是作为入门参考，面向初学者，让初学者少走弯路。'
  },
  {
    'id': 1,
    'createTime': '2017-10-13',
    'author': 'bill',
    'blogUrl': '#',
    'title': '【从前端菜鸟到大神】一片总结的很好的文章',
    'desc': '结合个人经历总结的前端入门方法，总结从零基础到具备前端基本技能的道路、学习方法、资料。由于能力有限，不能保证面面俱到，只是作为入门参考，面向初学者，让初学者少走弯路。'
  }
]
const recommend = []
const clickRank = []
router.get('/', async (ctx, next) => {
  console.log(ctx)
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    newsList: newsList
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
