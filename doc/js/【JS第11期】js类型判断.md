# 【JS第11期】js类型判断

## typeof
```
typeof 'str' // "string"
typeof 123 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object"
typeof [] // "object"
function test(){}

typeof test // "function"
typeof new Date() // "object"
typeof new RegExp() // "object"
typeof Symbol('val') // "symbol"

```JavaScript String 通过 new创建和直接赋值字符串的区别

## instanceof
instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
```

var simpleStr = "This is a simple string"; 
simpleStr instanceof String; // false 检查原型链会找到 undefined

var myString = new String();
myString  instanceof String; // true
myString  instanceof Object; //  true

var newStr = new String("String created with constructor");
newStr instanceof String; // true
newStr  instanceof Object; //  true

var myDate = new Date();
myDate instanceof Date;     // true
myDate instanceof Object;   // true
myDate instanceof String;   // false

var myObj = {};
myObj instanceof Object;     // true

var num = 123
num instanceof Number // false

var myNum = new Number(123)
myNum instanceof Number // true
myNum instanceof Object // true
myNum instanceof Function // false

var bool = true;
bool instanceof Boolean // false

var myBool = new Boolean();
myBool instanceof Boolean // true
myBool instanceof Object // true

var arr = []
arr instanceof Array; // true
arr instanceof Object // true

function test(){}
test instanceof Function; // true
test instanceof Object // true

var date = new Date()
date instanceof Date; // true
date instanceof Object // true

var reg = new RegExp()
reg instanceof RegExp; // true
reg instanceof Object // true


var sym = Symbol('val');
sym instanceof Symbol; // false
sym instanceof Object // false

```

## Object.prototype.toString.call

```

var simpleStr = "This is a simple string"; 
Object.prototype.toString.call(simpleStr) // "[object String]"

var myString = new String();
Object.prototype.toString.call(myString)  // "[object String]"

var newStr = new String("String created with constructor");
Object.prototype.toString.call(newStr)  // "[object String]"

var myDate = new Date();
Object.prototype.toString.call(myDate)  // "[object Date]"

var myObj = {};
Object.prototype.toString.call(myObj)  // "[object object]"

var num = 123
Object.prototype.toString.call(num)  // "[object Number]"

var myNum = new Number(123)
Object.prototype.toString.call(myNum)  // "[object Number]"

var bool = true;
Object.prototype.toString.call(bool)  // "[object Boolean]"

var myBool = new Boolean();
Object.prototype.toString.call(myBool) // "[object Boolean]"

var arr = []
Object.prototype.toString.call(arr) // "[object Array]"

function test(){}
Object.prototype.toString.call(test) // "[object Function]"


var date = new Date()
Object.prototype.toString.call(date) // "[object Date]"

var reg = new RegExp()
Object.prototype.toString.call(reg) // "[object RegExp]"

var sym = Symbol('val');
Object.prototype.toString.call(sym) // "[object Symbol]"

```