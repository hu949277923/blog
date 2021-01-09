
/**
 * 对象类型
 * 
 * @flow
 */

 const obj1: { foo: String, bar: number } = { foo: 'string', bar: 100 };

 const obj1: { foo?: String, bar: number } = { bar: 100 }; // ? 表示可有可无


const obj3:{ [string]: string } = {};

obj3.key1 = 'value1';

obj3.key2 = 100;