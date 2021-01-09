
/**
 * 元组 类型
 * 一种特殊的数据结构，明确元素数量以及元素类型的数组
 */
export {}
const tuple: [number, string] = [18, 'zc']

// const age = tuple[0]
// const name = tuple[1]
const [age, name] = tuple
// 得到的键值就是一个元组，因为它是一个固定长度的
Object.entries({
  foo:123,
  bar:456
})