
/**
 * 接口 补充
 * 可选成员、只读成员、动态成员
 */
export {}
// 可选成员
// ？ 表示接口对象subtitle成员可填可不填
interface Post {
  title: string,
  content: string,
  subtitle?: string
}
const hello: Post = {
  title: 'hello typescipt',
  content: 'a javascript support'
  // subtitle: 'a javascript summary'
}
// 只读成员
// readonly 不允许外界修改
interface Post2 {
  title: string,
  content: string,
  readonly summary: string
}
const hello2: Post2 = {
  title: 'hello typescipt',
  content: 'a javascript support',
  summary: 'a javascript summary'
}
// Cannot assign to 'summary' because it is a read-only property.ts(2540)
// hello.summary = 'other'

// 动态成员
// 设置键类型为字符串类型，值为字符串类型
// prop 可以是任意值
interface Cache {
  [prop: string]: string
}
const cache: Cache = {}
cache.foo = 'value1'
cache.bar = 'value2'

