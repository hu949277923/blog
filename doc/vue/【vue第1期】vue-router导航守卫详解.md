# 【vue第1期】vue-router导航守卫详解
vue-router导航守卫主要有三种。分别是全局导航守卫、路由内导航守卫、组件内导航守卫，下面我们详细介绍各自的守卫方法
# 全局导航守卫
## Router.beforeEach
```
const router = new Router();
router.beforeEach((to, from, next) => {})
```
- to 即将进入的路由对象
- from 导航离开的路由对象
- next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
1. next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
2. next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
3. next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
4. next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
## Router.beforeReslove
Router.beforeReslove是2.5.0版本新增的方法，该方法在组件守卫与异步路由组件解析完成后执行
## Router.afterEach
注册全局后置钩子，然而与守卫不同的是，不能接受next参数也不会改变导航本身：
router.afterEach((to, from) => {
  // ...
})
# 路由内导航守卫
```
const router = new VueRouter({
  routers: [
    {
      path: '/foo',
      components: require('./foo'),
      beforeEnter (to, from, next) => {
        // ...
      }
    }
  ]
})
```
# 组件内导航守卫
```
const tpl = {
  template: '',
  beforeRouterEnter (to, from, next) {
    // 不能获取组建中的this
    // 组件实例还没有创建
  }
  beforeRouterUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  }
  beforeRouterLeave (to, from, next) {
    / 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
```
beforeRouteEnter 守卫 不能 访问 this，因为守卫在导航确认前被调用,因此即将登场的新组件还没被创建。

不过，你可以通过传一个回调给 next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
```
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```
注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。对于 beforeRouteUpdate 和 beforeRouteLeave 来说，this 已经可用了，所以不支持传递回调，因为没有必要了。
```
beforeRouteUpdate (to, from, next) {
  // just use `this`
  this.name = to.params.name
  next()
}
```
这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。
```
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
