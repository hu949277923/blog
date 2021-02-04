// 异步串行执行
// fn(undefined) 则继续执行后续任务，否则直接将fn函数传入的参数返回
const { AsyncSeriesWaterfallHook } = require('tapable')

const hook = new AsyncSeriesWaterfallHook(['name'])
console.time('time')
let count1 = 3, count2 = 2
hook.tapAsync('fn1', function(name, fn) {
  setTimeout(()=> {
    console.log('fn1--->', name)
    fn()
  }, 1000)
})
hook.tapAsync('fn2', function(name, fn) {
  return setTimeout(()=> {
    console.log('fn2--->', name)
    fn(123)
  }, 1000)
})
hook.tapAsync('fn3', function(name, fn) {
  setTimeout(()=> {
    console.log('fn3--->', name)
    fn()
  }, 1000)
})
hook.callAsync('bill3', function(result) {
  console.log("执行完成", result)
  console.timeEnd('time')
})