// 构造函数
let test = () => {
  let obj = new Object()
  obj.name = 'zcc'
  obj.age = 18
  obj.slogan = 'i love sun'
  return obj
}
test()
var str = new String('hello')
// 字面量
let test = () => {
  let obj = {
    name: 'zcc',
    age: 18,
    slogan: 'i love sun'
  }
  return obj
}
test()
var str = 'hello'

// 创建对象时建议字面量，因为执行效率更高一些
