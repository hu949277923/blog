
/**
 * 数组类型
 * 
 * @flow
 */

const arr1: Array<number> = [1, ,2, 3];

const arr2: number[] = [1, 2, 3];

const foo: [String, number] = ['foo', 100] // 只能包含2个长度的数组 第一个位置必须为字符串， 第二个必须为数字