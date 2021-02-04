const { AsyncParallelBailHook } = require('tapable')
// 由于是并行执行，所以 任务抛出异常，后续任务仍然会执行；
// 由于是并行执行，所以 上一个任务返回undefined 或者其他值，后续任务仍然会被执行
const hook = new AsyncParallelBailHook(['name'])
console.time('time')
hook.tapPromise('fn1', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1--->', name)
      reject('123')
    }, 1000);
  })
})
hook.tapPromise('fn2', function(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn2---->', name)
      resolve()
    }, 2000)  
  })
})

hook.promise('bill2').then(() => {
  console.log('执行完毕')
  console.timeEnd('time')
})