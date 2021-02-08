// 上一个返回值为,下一个的的第一个的参数
const { SyncWaterfallHook } = require('tapable')

const hook = new SyncWaterfallHook(['name', 'age'])

hook.tap('fn1', function (name, age) {
  console.log('fn1--->', name, age)
  return 'zs'
})
hook.tap('fn2', function (name, age) {
  console.log('fn2--->', name, age)
  return 'lisi'
})
hook.tap('fn3', function (name, age) {
  console.log('fn2--->', name, age)
})
hook.call('bill3', 33)