
/**
 * 任意类型
 * any 不存在任何类型检测，兼容一些老代码的时候会用到这个类型
 */
export {}

function stringify (value: any) {
  return JSON.stringify(value)
}
stringify('123123')