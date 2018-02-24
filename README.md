# blog
基于node+mongoose+koa2+ejs 开发的个人博客
# 环境搭建

- node.js
- mongoose
- redis
- pm2
- nginx

# 总结
## 登录功能（具体实现如下）
1. 将session存储到redis中，涉及中间件有koa-session2、ioredis；并且需要安装并启动redis 默认端口6379
2. 每个页面都需要获取session来判断登录状态，故通过ctx.state将session传递给所有模板（页面）
```
// app.js
const session = require("koa-session2")
const Store = require("./utils/store")
// session 中间件
app.use(session({
  key: 'sessionKey',   //default "koa:sess"
  store: new Store()
}));

app.use(async (ctx, next) => {
  ctx.state = Object.assign(ctx.state, { session: ctx.session});
  await next()
})

app.use(ctx => {
    let user = ctx.session.user; // 获取session中的user
 
    ctx.session.user = "bill"; // 添加session字段user
});
// index.ejs
<%= session.user%>
```
## 时间过滤器
引入moment.js,将moment对象传递至前端视图（ejs）
```
// app.js
const moment = require('moment')
app.use(async (ctx, next) => {
  ctx.state = Object.assign(ctx.state, { moment: moment });
  
  await next()
})
```