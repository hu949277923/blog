// 手动实现压缩css文件功能
const fs = require('fs')
const { Transform } = require('stream')
// pipe 方法传入方法的是一个function，这个function作用无非是接受上一个流（stream）的结果，并返回一个处理后流的结果(返回值应该是一个stream对象)。
exports.default = () => {
// 读取文件内容 

// 压缩文件内容
// 写入文件内容
  // 文件读取流
  const read = fs.createReadStream('normalize.css')
  // 格式化文件

  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      // chunk buffer 流文件
      const input = chunk.toString()
      const output = input.replace(/\s/g, '').replace(/\/\*.+?\*\//g, '')
      callback(null, output)
    }
  });
  // 文件写入流
  const write = fs.createWriteStream('normalize.min.css')
  read
    .pipe(myTransform)
    .pipe(write)
  return read
}
