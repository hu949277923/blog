## 对象简介
对象在js中是一种复杂的数据类型。一般由属性和方法构成，属性为对象所具有的特性。方法是对象的行为。比如：人就是对象。名字、性别等作为人的属性；说话、走路等一系列行为动作就可以定义为方法或者函数。
## 创建对象的方法
## 对象字面量
对象字面量是创建对象的一种方法，它主要是以键值对的形式出现的。如：demo1.js
```
// demo1.js
var persion = {
  name: 'bill',
  getName: function(){
    return this.name
  }
}
persion.getName() // bill
```

## 构造函数
```
// demo2.js
function Persion () {
  this.name = 'bill',
  getName: function() {
    return this.name
  }
}
var persion = new Persion()
persion.getName() // bill
```
## Object.create
```
// demo3.js
var persion = Object.create({
  name: 'bill',
  getName: function(){
    return this.name
  }
})
persion.getName() // bill
```
## es6的class 类
```
class Persion {
  constructor() {
    this.name = 'bill'
  }
  getName() {
    return this.name
  }
}
var persion = new Persion()
persion.getName()
```
