# 【JS第1期】深拷贝实现原理
首先，从copy开始说，简而言之，copy的目的就是生成一个新的实例，然后把其成员都按原实例赋值。对于非指针型的成员，比如boolern、String、Number等，这样的赋值可以直接进行。但是对于指针型的数据，比如Object，就有深拷贝和浅拷贝的区别。我们接下来通过示例来进行介绍：

## 浅拷贝

```
// demo1.js
var obj = {
  name: 'bill',
  sex: '1',
  getName: function() {
    return this.name;
  },
  config: {
    birstary: '1992-02-02',
    isTrue: true
  }
}
    
function copy(obj) {
  var o = {}
  for (let i in obj) {
      o[i] = obj[i]    
  }
  return o;
}
var obj2 = copy(obj);
obj2.name = 'bill2'
obj2.config.isTrue = false
console.log(obj2)
console.log(obj)
```
通过demo1.js我们可以了解到，我们修改了obj2的属性name,以及obj2中config对象内的属性isTrue。打印查看结果后发现，obj的config对象内的属性isTrue也跟着变了。这是因为config是一个对象，我们在copy的时候只是将config对象的指针进行了拷贝，而原对象并没有进行拷贝。所以，如果我们想修改obj2的config对象内的属性而不影响obj的话我们就需要深拷贝，具体实现如下：
```
var obj = {
  name: 'bill',
  sex: '1',
  getName: function() {
    return this.name;
  },
  config: {
    birstary: '1992-02-02',
    isTrue: true
  }
}

function copy(obj) {
  var o = {}
  for (let i in obj) {
    if (Object.prototype.toString.call(obj[i]) == '[object Object]') {
      var obj2 = copy(obj[i])
      o[i] = obj2;
    } else {
      o[i] = obj[i]
    }
    
  }
  return o;
}
var obj2 = copy(obj);
obj2.name = 'bill2'
obj2.config.isTrue = false
console.log(obj2)
console.log(obj)
```
我们运用递归的方法，检测是否是Obejct。如果不是直接赋值，如果是，我们再对Object进行拷贝。
