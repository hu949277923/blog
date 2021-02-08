// 在执行过程中回调返回非 undefined 时继续再次执行当前的回调。
// 在上一个循环完后，才会执行下一个，若下一个仍然存在循环，则会第一个任务开始执行
const { SyncLoopHook } = require('tapable')

const hook = new SyncLoopHook(['name', 'age'])
let count1 = 3, count2 = 3;
hook.tap('fn1', function (name, age) {
  console.log('fn1---->', name, age)
  if (--count1 <= 0) return undefined
  return true
})
hook.tap('fn2', function (name, age) {
  console.log('fn2---->', name, age)
  if (--count2 <= 0) return undefined
  return true
})

hook.call('bill4', 44)