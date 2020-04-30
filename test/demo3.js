// iterator

// if (!Number.prototype[Symbol.iterator]) {
//   Number.prototype[Symbol.iterator] = function() {
//     var top = this;
//     var i;
//     var done = false;
//     return {
//       [Symbol.iterator]() {
//         return this;
//       },
//       next() {
//         if (!done) {
//           if (i == null) {
//             i = 0;
//           } else {
//             i = Math.min(top, i + 1)
//           }
//           console.log('done',done)
//           if ( i == top) { done = true }
//           return { value: i, done: false }
//         } else {
//           return { done: true }
//         }
//       }
//     }
//   }
// }
// var num = 3;
// var it = num[Symbol.iterator]()
// console.log(it)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

if (!Number.prototype[Symbol.iterator]) {
  Object.defineProperty(Number.prototype, Symbol.iterator, {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function iterator() {
      let done = false, top = +this, ins = 1 * (top < 0 ? -1 : 1)
      return {
        [Symbol.iterator]() { return this },
        next() {
          if (!done) {
            if (i == null) {
              i = 0
            } else if ( top >=0 ) {
              i = Math.min(top, i + ins)
            } else {
              i = Math.max(top, i + ins)
            }
            if (i === top) {
              done = true
            }
            return { done: false, value: i }
          } else {
            return { done: true, value: (void 0)}
          }
        }
      }
    }
  })
}

for (var i of -3) {
  console.log(i)
}