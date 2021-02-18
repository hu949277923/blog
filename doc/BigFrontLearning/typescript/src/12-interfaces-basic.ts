
/**
 * 接口
 * 一种规范，一种契约，是一种抽象的概念，可以约定对象的结构，使用接口必须要准许接口的全部约定
 * 用来约定对象中应该有哪些成员，而且这个对象类型是什么样的
 */
export {}
// 定义接口
//  可用，；也可不写，具体根据规范来写
interface Post {
  title: string
  content: string
}
// 传人对象必须要存在title和 content
function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}
printPost({
  title: 'title',
  content: 'content'
})