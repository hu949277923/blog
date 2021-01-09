
/**
 * 隐式类型推断
 * 当给一个变量赋值后，会默认将该值的类型赋给这个变量，当再给这个变量赋值的时候，则必须是同类型的值，否则会报错误信息
 */
export {}

// let age: number  默认推断为number
let age = 18

// 当赋值为其他类型时，会报错如下
// Type 'string' is not assignable to type 'number'.ts(2322)
// age = "string"