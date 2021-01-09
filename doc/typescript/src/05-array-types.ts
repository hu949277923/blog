
/**
 * Array 类型
 * 
 */

 // 纯数字类型数组
 const arr1: Array<number> = [1, 2, 3]

 const arr2: number[] = [1, 2, 3]

 // 使用强类型优势
// 之前需要判断每一个成员类型是不是数字
// 现在加一个数字注解即可

 function sum (...args: number[]) {
   return args.reduce((prev, curr) => prev + curr, 0)
 }
 // 如果现象传一个非数字值就会报错
 sum(1,2,3)