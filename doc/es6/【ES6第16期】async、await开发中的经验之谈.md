# 【ES6第16期】async、await开发中的经验之谈

最近运用async、await对现有项目异步操作进行优化，主要是请求后端接口方面，在前期我们是这样做的
```
const getList1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getList1')
    }, 2000)
  })
}
const getList2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getList2')
    }, 2000)
  })
}
async function test() {
  console.time('time')
  const res1 = await getList1()
  console.log(res1)
  const res2 = await getList2()
  console.log(res2)
  console.timeEnd('time')
}
test()
```
如上，当我们运用如上进行测试后发现，请求的时长有4s多，这是因为我们上面的这种写法属于串行的方式，在getList1返回数据后，才会去请求getList2。所以时长会超过4s。我们如何将这两个互补依赖的接口运用并行的方式，减少请求时长尼？？经过试验发现可以通过如下操作来实现。

```
const getList1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getList1')
    }, 2000)
  })
}
const getList2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('getList2')
    }, 2000)
  })
}
async function test() {
  console.time('time')
  let res1 = getList1()
  let res2 = getList2()
  res1 = await res1
  console.log(res1)
  res1 = await res2
  console.log(res2)
  console.timeEnd('time')
}
test()
```
注意：getList1与getList2必须在await之前，否则仍是串行

**如觉得有疑问，或者有更好的方案，欢迎留言**