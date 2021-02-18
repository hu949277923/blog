
/**
 * 类型声明
 * 引用第三方模块，如果不包括类型声明文件，我们可以去安装对应的类型声明模块，如果没有的话，我们需要用declare语句自己声明模块
 * 目前常用的npm模块已经大部分都有来声明模块，我们一般只需 导入即可
 * */
//   Try `npm i --save-dev @types/lodash` if it exists or add a new declaration (.d.ts) file containing `declare module 'lodash';`ts(7016)
// @types/lodash 为类型声明文件
import { camelCase } from 'lodash'
// 自定义声明类型
// declare function camelCase (input: string): string
// 安装 @types/lodash
const res = camelCase('hello world')