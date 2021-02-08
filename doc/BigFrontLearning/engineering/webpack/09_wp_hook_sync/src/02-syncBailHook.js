// 类似于 SyncHook，执行过程中注册的回调返回非 undefined 时就停止不再执行。
const { SyncBailHook } = require('tapable')

const hook = new SyncBailHook(['name', 'age'])
console.time('time')
hook.tap('fn1', function(name, age) {
  console.log('fn1---->', name, age)
  // 返回undefined 继续向下执行，返回其他值，则中断执行
  return undefined
})
hook.tap('fn2', function(name, age) {
  console.log('fn2---->', name, age)
})
console.timeEnd('time')
hook.call('bill2', 23)