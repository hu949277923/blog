# 【问题第5期】vue路由地址跳转相同，控制台出现错误警告
```
// vue-router ≥3.0版本回调形式以及改成promise api的形式了，返回的是一个promise，如果路由地址跳转相同, 且没有捕获到错误，控制台始终会出现错误警告 （注：3.0以下版本则不会出现以下警告！！！，因路由回调问题…）
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
```