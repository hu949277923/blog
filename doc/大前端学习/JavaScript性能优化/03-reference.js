
let obj = { name: 'xm'} //可达的

let ali = obj // obj多了一次引用

obj = null // 引用被断掉，由于ali引用了obj,所以obj仍然是可达的

