/**
 * @param {number} x
 * @return {number}
 */
// const reverse = (x) => {
//   if (x < 0) {
//     x = x.toString().split('-')[1]
//     x = x.split('').reverse().join('')
//     x = `-${x}`
//     console.log(x)
//     x = +x
//   } else {
//     x = x.toString().split('').reverse().join('')
//     x = +x
//   }
//   if (x >= Math.pow(2, 31) - 1 || x < Math.pow(-2, 31) ) {
//     return 0
//   }
//   return x
// }
const reverse = function (n) {
  if (n == 0) {
    return 0
  }
  let res = 0;
  while(n !== 0) {
    res = res * 10 + n % 10
    n = parseInt(n / 10)
  }
  if (res >= Math.pow(2, 31) - 1 || res <= Math.pow(-2, 31) ) {
    return 0
  }
  return res
}
x = 120
console.log(reverse(x))



