
/**
 * 特殊类型
 * 
 * @flow
 */
const a: 'foo' = 'foo';
// 只允许赋值 'success' | 'warning' | 'danger'
const type: 'success' | 'warning' | 'danger' = 'success';

type StringOrNumber = string | number; // 可以多个类型一致的地方通用
const b: string | number = 'string';
const b: StringOrNumber = 100;

const gender: ?number = null // 或者 undefined

const gender: number | null | undefined  = 123 // 等价于gender: ?number写法，可以定义 类型为 number | null | undefined