# 【JS第34期】BOM-window对象

BOM的核心对象是window,它表示浏览器的一个实例。它即是通过javascript访问浏览器窗口的一个接口，也是ECMAScript规定的Global对象。

## 全局作用域

由于window对象同时是Global对象，因此所有在全局作用域中声明的变量、函数会变成window对象的属性和方法。如：

```
var age = 29;
function test() {
  console.log(this.age);
}
console.log(window.age) // 29
test() // 29
window.test() // 29
```

定义全局变量与window对象上直接定义属性的区别：全局变量不能通过delete操作符删除，而直接在window对象上的定义的属性可以.如：

```
var age = 29;

window.color = 'red';

// 在ie < 9时抛出错误，在其他浏览器中返回false
delete window.age;

// 在ie < 9时抛出错误，在其他浏览器中返回true
delete window.color // true

window.age; // 29
window.color; // undefined
```

尝试访问未声明的变量会抛出错误，但通过查询window对象，可以知道某个可能未声明的变量是否存在。如：

```
// 这里抛出错误，因为old未定义
var curr = old;

// 这里不会抛出错误，因为这是一次属性查询

var val = window.oldVal; 
```
