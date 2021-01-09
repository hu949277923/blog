
/**
 * 类型注解
 * @flow
 */
function square (n: number) {
  return n * n
}
let num: number = 100

// num = 'str' // 报语法错误

function foo (): number {
  // return 100
  return 'string' // 报语法错误
}