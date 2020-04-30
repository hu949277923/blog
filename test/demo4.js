// 生成器 提前完成 return throw 

// return 会在finally后返回
// function *foo() {
//   try {
//     yield 1;
//     yield 2;
//     yield 3;
//   } finally {
//     console.log('ok')
//   }
// }
// var it = foo();
// console.log(it.next())
// console.log(it.next())
// console.log(it.return())

//  throw 则不会
function *foo() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch(er) {
    console.log('eee',er)
  }
   finally {
    console.log('ok')
  }
}
var it = foo();
console.log(it.next())
console.log(it.next())
console.log(it.throw('err'))