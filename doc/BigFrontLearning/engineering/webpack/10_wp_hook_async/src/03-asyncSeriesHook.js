// 异步串行执行
const { AsyncSeriesHook } = require('tapable')

const hook = new AsyncSeriesHook(['name'])
console.time('time')
hook.tapAsync('fn1', function(name, fn) {
  setTimeout(()=> {
    console.log('fn1--->', name)
    fn()
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