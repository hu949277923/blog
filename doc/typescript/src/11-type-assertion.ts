
/**
 * 类型断言
 * typescipt 无法推断出具体类型，但作为开发者可以明确知道具体类型，我们可以通过类型断言来明确具体的类型，类型断言不是类型转换，它只存在于类型编译过程
 * 断言方式: 
 * 1 as
 * 2 <类型> jsx 下不能使用，因为有冲突
 * 
 */
export {}

const nums = [100, 200, 300]

const res = nums.find(i => i > 0)

const square = res * res
// 断言方式

// as
const num1 = res as number
// <>
const num2 = <number>res //  jsx 下不能使用，因为有冲突