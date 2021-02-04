// 异步串行执行
// 回调传人参数为undefined,则继续执行，否则中断执行
const { AsyncSeriesBailHook } = require('tapable')

const hook = new AsyncSeriesBailHook(['name'])
console.time('time')
hook.tapAsync('fn1', function(name, fn) {
  setTimeout(()=> {
    console.log('fn1--->', name)
    fn(123)
  }, 1000)
})
hook.tapAsync('fn2', function(name, fn) {
  setTimeout(()=> {
    console.log('fn2--->', name)
    fn()
  }, 1000)
})
hook.tapAsync('fn3', function(name, fn) {
  setTimeout(()=> {
    console.log('fn3--->', name)
    fn()
  }, 1000)
})
hook.callAsync('bill3', function() {
  console.log("执行完成")
  console.timeEnd('time')
})