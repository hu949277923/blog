//  手写生成器
// es6

// function *foo() {
//   var x = yield 42;
//   console.log(x)
// }

// es6之前
// function foo() {
//   function nextState(v) {
//     switch (state) {
//       case 0:
//         state++;
//         return 42;
//       case 1:
//         state++;
//         x = v;
//         console.log(x);
//         return undefined;
//     }
//   }
//   var state = 0, x;
//   return {
//     next: function(v) {
//       var ret = nextState(v);
//       return { value: ret, done: (state == 2)};
//     }
//   }
// }


function foo() {
  var state = 0;
  return {
    next(v) {
      let z;
      switch(state) {
        case 0:
          state++;
          z = 42;
          break
        case 1:
          state++
          console.log(v)
          z = undefined
          break
      }
      console.log(z)
      return { done: (state === 2), value: z }
    }
  }
}
var it = foo();
console.log(it.next())
console.log(it.next(10))