// 通过原型新增方法
console.time('fn1')
var fn1 = function() {
  this.foo = function() {
    console.log(11111)
  }
}
let f1 = new fn1()
// 通过原型新增方法
console.timeEnd('fn1') // fn1: 0.213ms
// 通过原型链新增方法
console.time('fn2')
var fn2 = function() {
  
}
fn2.prototype.foo = function() {
  console.log(11111)
}
let f2 = new fn2()
console.timeEnd('fn2') // fn2: 0.053ms