const fs = require('fs')
// 1 通过 callback 回调函数异步执行
exports.callback = done => {
  console.log('callback working...')
  done()
}
// 执行过程中报出错误，如果多个任务执行，则后续任务不会执行（错误优先）
exports.callback_error = done => {
  console.log('callback working...')
  done(new Error('task failed!!'))
}
// node8以上版本支持

// 2 通过es6 promise语法实现异步执行， 
// 通过Promise.resolve()来标记完成
exports.promise = () => {
  console.log('promise working...')
  return Promise.resolve()
}

exports.promise_error = () => {
  console.log('promise working...')
  return Promise.reject(new Error('task failed!!'))
}
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
// 3 通过 async 语法糖实现异步执行,其实内部仍是promise

// node环境支持则可以使用
exports.async = async () => {
  await timeout(1000)
  console.log('async task...')
}

// 4 通过 stream 处理文件, 当处理文件结束后会自动出发end事件
// exports.stream = done => {
//   const readStream = fs.createReadStream('package.json')
//   const writeStream = fs.createWriteStream('temp.txt')
//   readStream.pipe(writeStream)
//   return readStream
// }

// 模拟gulp中结束操作
exports.stream = done => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  readStream.on('end', () => {
    done()
  })
}