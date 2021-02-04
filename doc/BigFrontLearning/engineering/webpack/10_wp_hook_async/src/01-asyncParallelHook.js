// 对于异步钩子的使用，在添加事件监听时会存在三种方式： tap tapAsync tapPromise
// 并行执行
const { AsyncParallelHook } = require('tapable')

const hook = new AsyncParallelHook(['name', 'age'])
// 1 tapAsync callAsync回调函数方式
// console.time('time')
// hook.tapAsync('fn1', function (name, age, callback) {
//   setTimeout(() => {
//     console.log('fn1', name, age)
//     callback()
//   }, 1000);
// })
// hook.tapAsync('fn2', function(name, age, callback){
//   setTimeout(() => {
//     console.log('fn2', name, age)
//     callback()
//   }, 2000)
// })
// hook.callAsync('bill1', 20, function() {
//   console.log('执行完毕')
//   console.timeEnd('time')
// })
// 2 promise方式

console.time('time')
hook.tapPromise('fn1', function(name, age) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log('fn1', name, age)
      resolve()
    }, 1000)
  })
})

hook.tapPromise('fn2', function(name, age) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log('fn2', name, age)
      resolve()
    }, 2000)
  })
})

hook.tapPromise('fn3', function(name, age) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      console.log('fn3', name, age)
      resolve()
    }, 3000)
  })
})

hook.promise('bill-promise', 24).then((result) => {
  console.log('promise执行完成', result)
  console.timeEnd('time')
})