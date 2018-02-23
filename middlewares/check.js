module.exports ={
  // 已经登录了
  checkNotLogin: (ctx) => {
    if (ctx.session.username) {     
      // ctx.redirect('/posts')
      return false
    }
    return true
  },
  //没有登录
  checkLogin: (ctx) => {
    if (!ctx.session.username) {     
      ctx.redirect('/')
      return false
    }
    return true
  }
}