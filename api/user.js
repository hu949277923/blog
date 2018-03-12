
const router = require('koa-router')()

const User = require('../models/user')

router.prefix('/api')

router.post('/signIn', async (ctx, next) => {
  console.log(ctx.request.body)
  const req = ctx.request.body
  console.log(req.username)
  const res = await User.getUserByUsername(req.username)
  console.log(res)
  let message = '成功登录';
  let code = 200
  if (!res) {
    code = 404
    message = '用户名不正确'
  }
  if (res && res.password !== req.password) {
    code = 404
    message ='密码不正确'
  }
  if (code === 200) {
    // 写入session
    ctx.session.username = req.username
  }
  ctx.type='application/json;charset=utf-8'
  ctx.body = {
    code: code,
    message: message
  }
})
module.exports = router
