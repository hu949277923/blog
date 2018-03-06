# 【JS第6期】事件冒泡与捕获

事件冒泡与事件捕获分别有微软与网景公司提出，这两个概念主要是为了解决事件流（事件发生顺序）的一些问题。
考虑下如下代码
```
<div id="outter">
  <div id="inner"> click me </div>
</div>
```
如果我为id为outter与inner的两个节点都添加click事件，哪个会首先触发呢？

...

为了解决上面的问题，微软与网景分别提出了两种几乎完全相反的解决方案，也就是上面提到的冒泡与捕获

## 事件冒泡
事件冒泡这个概念是有微软提出的解决事件流的方案，具体执行过程是由内层元素触发，一直向上传播直到document对象。类似于我们一个石头扔进河里，水泡由水底冒出水面的效果一样。

因此，在id为inner标签上发生click事件的顺序是 div(id=inner) => div(id=outter) => body => html => document

## 事件捕获
网景提出另一种事件流名为事件捕获(event capturing)。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。

因此在事件捕获的概念下在div标签上发生click事件的顺序应该是document => html => body => div(id=outter) => div(id=inner)


## addEventListener

网景 和 微软 曾经的战争还是比较火热的，当时， 网景主张捕获方式，微软主张冒泡方式。后来 w3c 采用折中的方式，平息了战火，制定了统一的标准——先捕获再冒泡。

addEventListener的第三个参数就是为冒泡和捕获准备的.

addEventListener有三个参数：

```
element.addEventListener(event, function, useCapture)
```
event: 绑定的事件

function: 触发事件的回调函数

useCapture： false 默认值 冒泡阶段 true 为捕获阶段


## 事件冒泡 vs 事件捕获

当事件冒泡与事件捕获同时存在的情况，事件又是如何执行的呢？
思考如下代码

```
<style>
#box {
  width: 100px;
  height: 100px;
  background-color: red;
}
#box-conent {
  width: 100px;
  height: 50px;
  background-color: black;
}
</style>
  
<div id="box">
  <div id="box-conent"></div>
</div>
<script>
  var obox = document.getElementById("box");
  var oboxCon = document.getElementById('box-content');
  obox.addEventListener('click', function(ev) {
    console.log(ev.target)
    console.log(ev.currentTarget)
    console.log('冒泡')
  }, false)
  obox.addEventListener('click', function(ev){
    console.log(ev.target)
    console.log(ev.currentTarget)
    console.log('委托1')
  }, true)
  obox.addEventListener('click', function(ev){
    console.log(ev.target)
    console.log(ev.currentTarget)
    console.log('委托2')
  }, true)
</script>
```
box盒子宽高100 * 100， box-content盒子宽高 100 * 50。

下面思考一下，点击box-content盒子时，上面代码输出结果是什么？

点击box盒子时，输出结果又是什么？为什么？

...

通过思考、测试我们发现

点击box-content时，输出结果依次是 

```
 委托1  
 委托2
 冒泡
```
执行过程中上面ev.target 与ev.currentTarget 结果有什么变化？

ev.target 输出 `<div id="box-conent"></div>`

ev.currentTarget 输出 `<div id="box"><div id="box-conent"></div></div>`


点击box时，输出结果依次是
```
冒泡
委托1  
委托2
```
执行过程中上面ev.target 与ev.currentTarget 结果有什么变化？

ev.target 输出 `<div id="box"><div id="box-conent"></div></div>`

ev.currentTarget 输出 `<div id="box"><div id="box-conent"></div></div>`

执行完后，我们要了解ev.target与ev.currentTarget

## ev.target与ev.currentTarget

 ev.target  触发事件的对象（目标对象）
 
 ev.currentTarget 添加事件的对象
 

 ## 我们是否可以这么解释？？
 
e.target == e.currentTarget 执行顺序根据注册事件时的顺序执行

e.target != e.currentTarget 执行顺序为先执行捕获阶段，捕获目标对象，而后再执行冒泡阶段
