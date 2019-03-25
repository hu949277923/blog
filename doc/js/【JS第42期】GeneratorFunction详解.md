# 【JS第42期】GeneratorFunction 详解

- 在js中，生成器函数实际上就是GeneratorFunction的实例对象
- GeneratorFunction并不是一个全局对象，它可以通过如下代码获取

```js
Object.getPrototypeOf(function*(){}).constructor
```

- 使用GeneratorFunction比使用function* 表达式创建函数效率要低
- 使用GeneratorFunction构造函数创建的生成器函数不会为其创建上下文创建闭包；它们始终在全局范围内创建。
- 当运行它们时，它们只能访问自己的本地变量和全局变量，而不是从GeneratorFunction构造函数调用的范围的变量。这与使用eval与生成函数表达式的代码不同。如下：

```js
var b = 5
{
  let b = 10
  var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
  var g = new GeneratorFunction("a", "yield a * b * 2");
  var iterator = g(10);
  console.log(iterator.next().value); // 100
  function test() {
    console.log(b)
  }
  test() // 10
}
```

- 将GeneratorFunction构造函数调用为函数（不使用new运算符）与将其作为构造函数调用的效果相同。
