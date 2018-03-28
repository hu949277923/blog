# 【JS第3期】原型

## 初识原型

在JavaScript中，原型也是一个对象，通过原型可以实现对象的属性继承，JavaScript的对象中都包含了一个”[[Prototype]]”内部属性，这个属性所对应的就是该对象的原型。

“[[Prototype]]”作为对象的内部属性，是不能被直接访问的。所以为了方便查看一个对象的原型，Firefox和Chrome中提供了__proto__这个非标准（不是所有浏览器都支持）的访问器（ECMA引入了标准对象原型访问器”Object.getPrototype(object)”）。在JavaScript的原型对象中，还包含一个”constructor”属性，这个属性对应创建所有指向该原型的实例的构造函数

## 规则

在JavaScript中，每个函数 都有一个prototype属性，当一个函数被用作构造函数来创建实例时，这个函数的prototype属性值会被作为原型赋值给所有对象实例（也就是设置 实例的`__proto__`属性），也就是说，所有实例的原型引用的是函数的prototype属性。(****`只有函数对象才会有这个属性!`****)

new 的过程分为三步  

```
var p = new Person('张三',20);
```
1. var p={}; 初始化一个对象p。
2. p._proto_=Person.prototype;，将对象p的 __proto__ 属性设置为 Person.prototype
3.  Person.call(p,”张三”,20);调用构造函数Person来初始化p。关于call/apply使用

## 初识Object

Object对象本身是一个函数对象。(CODE TEST) 既然是Object函数，就肯定会有prototype属性，所以可以看到”Object.prototype”的值就是”Object {}”这个原型对象。反过来，当访问”Object.prototype”对象的”constructor”这个属性的时候，就得到了Obejct函数。

另外，当通过”Object.prototype._proto_”获取Object原型的原型的时候，将会得到”null”，也就是说”Object {}”原型对象就是原型链的终点了。

## 初识Function

如上面例子中的构造函数，JavaScript中函数也是对象，所以就可以通过_proto_查找到构造函数对象的原型。

Function对象作为一个函数，就会有prototype属性，该属性将对应”function () {}”对象。
Function对象作为一个对象，就有__proto__属性，该属性对应”Function.prototype”，也就是说，”Function._proto_ === Function.prototype”。

在这里对“prototype”和“proto”进行简单的介绍：
对于所有的对象，都有__proto__属性，这个属性对应该对象的原型.
对于函数对象，除了__proto__属性之外，还有prototype属性，当一个函数被用作构造函数来创建实例时，该函数的prototype属性值将被作为原型赋值给所有对象实例（也就是设置实例的__proto__属性）

![原型](https://files.jb51.net/file_images/article/201602/201622785912987.jpg)


来源：http://www.jb51.net/article/80109.htm