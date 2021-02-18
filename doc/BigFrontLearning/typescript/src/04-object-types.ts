
/**
 * Object 类型
 * 不单指普通对象类型，泛指对象、数组、函数
 */

 export {} // 确保跟其他示例没有成员冲突

const foo: object = function () {} // function // [] // {}

// 对象类型限制可以用对象字面量的方式，不过更专业方式是用接口
// 对象字面量类型限制要与对象保持一致，不能多不能少，否则也会报错
const obj: { foo: number, bar: string } = { foo: 123, bar: 'str',/* more: 'ds'*/ }