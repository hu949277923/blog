# 【JS第43期】new 操作符
> 这是重学 JS 系列的第一篇文章，写这个系列的初衷也是为了夯实自己的 JS 基础。既然是重学，肯定不会从零开始介绍一个知识点，如有遇到不会的内容请自行查找资料。

## new 的作用

我们先来通过两个例子来了解 new 的作用

```js
function Test(name) {
  this.name = name
}
Test.prototype.sayName = function () {
  console.log(this.name)
}
const t = new Test('yck')
console.log(t.name) // 'yck'
t.sayName() // 'yck'
```
从上面一个例子中我们可以得出这些结论：

- new 通过构造函数 Test 创建出来的实例可以访问到构造函数中的属性
- new 通过构造函数 Test 创建出来的实例可以访问到构造函数原型链中的属性，也就是说通过 new 操作符，实例与构造函数通过原型链连接了起来

但是当下的构造函数 Test 并没有显式 return 任何值（默认返回 undefined），如果我们让它返回值会发生什么事情呢？

```js
function Test(name) {
  this.name = name
  return 1
}
const t = new Test('yck')
console.log(t.name) // 'yck'
```
虽然上述例子中的构造函数中返回了 1，但是这个返回值并没有任何的用处，得到的结果还是和之前的例子完全一样。

那么通过这个例子，我们又可以得出一个结论：

- 构造函数如果返回原始值（虽然例子中只有返回了 1，但是你可以试试其他的原始值，结果还是一样的），那么这个返回值毫无意义

试完了返回原始值，我们再来试试返回对象会发生什么事情吧

```js
function Test(name) {
	this.name = name
	console.log(this) // Test { name: 'yck' }
	return { age: 26 }
}
const t = new Test('yck')
console.log(t) // { age: 26 }
console.log(t.name) // 'undefined'
```

通过这个例子我们可以发现，虽然构造函数内部的 this 还是依旧正常工作的，但是当返回值为对象时，这个返回值就会被正常的返回出去。

那么通过这个例子，我们再次得出了一个结论：

- 构造函数如果返回值为对象，那么这个返回值会被正常使用

> 这两个例子告诉了我们一点，构造函数尽量不要返回值。因为返回原始值不会生效，返回对象会导致 new 操作符没有作用。

通过以上几个例子，相信大家也大致了解了 new 操作符的作用了，接下来我们就来尝试自己实现 new 操作符。

## 自己实现 new 操作符

首先我们再来回顾下 new 操作符的几个作用

- new 操作符会返回一个对象，所以我们需要在内部创建一个对象
- 这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性
- 这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来
- 返回原始值需要忽略，返回对象需要正常处理

回顾了这些作用，我们就可以着手来实现功能了

```js
function create(Con, ...args) {
	let obj = {}
	Object.setPrototypeOf(obj, Con.prototype)
	let result = Con.apply(obj, args)
	return result instanceof Object ? result : obj
}
```
这就是一个完整的实现代码，我们通过以下几个步骤实现了它：

1. 首先函数接受不定量的参数，第一个参数为构造函数，接下来的参数被构造函数使用
2. 然后内部创建一个空对象 obj
3. 因为 obj 对象需要访问到构造函数原型链上的属性，所以我们通过 setPrototypeOf 将两者联系起来。这段代码等同于 obj.__proto__ = Con.prototype
4. 将 obj 绑定到构造函数上，并且传入剩余的参数
5. 判断构造函数返回值是否为对象，如果为对象就使用构造函数返回的值，否则使用 obj，这样就实现了忽略构造函数返回的原始值

接下来我们来使用下该函数，看看行为是否和 new 操作符一致

```js
function Test(name, age) {
	this.name = name
	this.age = age
}
Test.prototype.sayName = function () {
		console.log(this.name)
}
const a = create(Test, 'yck', 26)
console.log(a.name) // 'yck'
console.log(a.age) // 26
a.sayName() // 'yck'
```


