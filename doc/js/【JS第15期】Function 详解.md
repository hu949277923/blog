# 【JS第15期】Function 详解

函数实际上是一个对象。每个函数都是Function 实例，而且都与其他引用类型一样具有属性和方法。由于函数也是对象，因此函数名实际上也是一个指向函数对象的指针。

## 函数定义方式

**函数声明**
```
function sum(num1, num2) {
  return num1 + num2;
}
```
**函数表达式**
```
var sum = function(num1, num2) {
  return num1 + num2;
}
```
**Function 构造函数**

```
var sum = new Function('num1', 'num2', 'return num1 + num2');
```

`注意：`使用构造函数定义是不推荐的。因为这种语法会导致解析两次代码（第一次解析常规ECMAScript代码， 第二次是解析传入构造函数中的字符串）,从而影响性能

**函数声明与函数表达式的区别**

- 函数声明会首先被解析器读取，并使其在执行任何代码之前可以访问。如：
```
console.log(sum()) // 1
function sum() {
  return 1;
}
```
- 函数表达式则必须等到解析器执行到它所在的代码块，才会真正被解析器执行。如：
```
console.log(sum()) // sum is not a function
var sum = function () {
  return 1;
}
```

## 没有重载

在创建两个同名函数时，后面的函数会覆盖了前面的函数。如：
```
function sum() {
  return 1;
}
function sum() {
  return 2
}
sum() // 2;
```
## 作为值的函数

因为ECMAScript 中函数名本身就是变量，所以函数可以作为值来使用。也就是说，不仅可以像传递参数一样传递给另一个参数，也可以将一个函数做为函数返回值返回，如下：
```
function test(func, arg) {
  return func(arg)
}
function test2() {
  return function() {
    console.log('test2')
  }
}
```

## 函数内部属性

**arguments**

arguments 是一个类数组的对象，返回值为函数的所有参数。这个对象还有另外一个属性callee,该属性是一个指针，指向arguments对象所在的函数的指针。举例说明：


```
// demo1.js
// 定义一个阶乘
function test(num){
  console.log('111')
    if(num <= 1){
        return 1;
    } else {
        return num * test(num - 1);
    }
}
test(5) // 120
// 将test函数赋值给另一个变量
var test2 = test

// 我们再重新给test定义一个方法
var test = function() {
  return 0;
}
test2(5) // 0;
test(5) // 0
```
再看下使用callee属性后是如何
```
// demo2.js
// 定义一个阶乘
function test(num){
    if(num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
test(5) // 120
// 将test函数赋值给另一个变量
var test2 = test

// 我们再重新给test定义一个方法
var test = function() {
  return 0;
}
test2(5) // 120;
test(5) // 0
```
demo1.js 的代码我们为test重新定义了方法，原test变量的指向的指针发生了变化，所以返回重新定义方法的返回值。


**this**

this 引用的是函数执行的环境对象。但有些特殊的例外，如settimeout,setInterval等

**caller**

caller保存着调用当前函数的函数引用，如果是在全局作用域下调用，则返回null。如：
```
function outer() {
  inner()
}

function inner() {
  console.log(inner.caller)
}
outer();
```
以上代码为了实现松耦合，也可以通过arguments.callee.caller来访问。如：
```
function outer() {
  inner()
}

function inner() {
  console.log(arguments.callee.caller)
}
outer();
```
IE、firefox、chrome、safri 的所有版本以及opera9.6都支持caller属性。

当函数在严格模式下运行时，访问arguments.callee会导致错误。

ECMAScript 5 还定义了 arguments.caller 属性，但在严格模式下访问它也会导致错误，而在非严格模式下这个属性始终是undefined。定义arguments.callee属性是为了分清arguments.caller和函数的caller属性。以上变化为了加强这门语言的安全性，这种第三方代码不能在相同的环境里窥视其他代码了。

严格模式还有一个限制：不能为函数的caller属性赋值，否则会导致错误。

## 函数的属性和方法
### 属性

**length**
length属性表示函数希望接收的命名参数的个数
**prototype**
prototype 指向原型对象。包括诸如：toString()、valueof()等方法
### 方法
以下的方法都是改变函数的this指向的
**call()**
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数(参数的列表)。
`语法`
```
fun.call(thisArg, arg1, arg2, ...)
```
`参数`
| 参数 | 描述 | 
|-----|-----|
| thisArg | 在fun函数运行时指定的this值。 |
| arg1, arg2, ... | 指定的参数列表。|
`返回值`
返回值是你调用的方法的返回值，若该方法没有返回值，则返回undefined。
**apply()**

方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数。

`语法`
```
fun.call(thisArg, [argsArray])
```
`参数`
| 参数 | 描述 | 
|-----|-----|
| thisArg | 在fun函数运行时指定的this值。 |
| argsArray | 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。|
`返回值`
调用有指定this值和参数的函数的结果。
**bind()**
bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。

`语法`
```
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```
`参数`
| 参数 | 描述 | 
|-----|-----|
| thisArg | 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。 |
| arg1, arg2, ... | 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。 |
`返回值`
返回由指定的this值和初始化参数改造的原函数拷贝