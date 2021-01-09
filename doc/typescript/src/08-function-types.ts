
/**
 * 函数类型
 * 对函数的输入输出进行类型限制，参数个数实参与形参要保持一致
 * 函数声明
 * 函数表达式
 */
export {}
// 函数声明

function fun1 (a: number, b: number): string {
  return 'func1'
}
// 可选参数 加？号 或者加默认值
function fun4 (a: number, b?: number, c: number = 19): string {
  return 'func4'
}
// 任意个数参数
function fun2 (a: number, b?: number, ...rest: number[]): string {
  return 'func2'
}
fun1(1,2)
fun2(1,2,3,4,5)
fun1(1,2)

// 函数表达式

const func3 = function(a:number, b:number): string {
  return 'func3'
}

// 函数参数为函数
const a= () => {}
const func5: (a: number, b: number) => string = function (a: number, b:number): string {
  return 'func5'
}