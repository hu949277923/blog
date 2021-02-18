// tapable 是一个类似于 Node.js 中的 EventEmitter的库，但更专注于自定义事件的触发和处理。webpack 通过 tapable 将实现与流程解耦，所有具体实现通过插件的形式存在。

// 
// const  { SyncHook } = require('tapable')
const SyncHook = require('./SyncHook')
const hook = new SyncHook(['name', 'age'])
console.time('time')
hook.tap('fn1', function(name, age) {
  console.log('fn1---->', name, age)
})
hook.tap('fn2', function(name, age) {
  console.log('fn2---->', name, age)
})
console.timeEnd('time')
hook.call('bill', 20)

// 可以看到当我们执行 hook.call('bill', 20) 时会依次执行前面 hook.tap(name, callback) 中的回调函数。通过 SyncHook 创建同步钩子，使用 tap 注册回调，再调用 call 来触发。这是 tapable 提供的多种钩子中比较简单的一种，通过 EventEmitter 也能轻松的实现这种效果。

