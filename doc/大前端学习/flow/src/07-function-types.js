
/**
 * 函数类型
 * 
 * @flow
 */

function foo (callback: (string, number) => void) {
  callback('string', 100)
}
foo(function(str, n) {
  // str => string
  // n => number
  // 无返回值
})