# 【JS第41期】实现Array.from函数

ECMA-262 第六版标准添加了 Array.from 。有些实现中可能尚未包括在其中。你可以通过在脚本前添加如下内容作为替代方法，以使用未原生支持的 Array.from 方法。该算法按照  ECMA-262 第六版中的规范实现，并假定 Object 和 TypeError 有其本身的值，  callback.call 对应 Function.prototype.call 。此外，鉴于无法使用 Polyfill 实现真正的的迭代器，该实现不支持规范中定义的泛型可迭代元素。

```js
Array.from = (function () {
    var toStr = Object.prototype.toString;
    // 判断是否为函数或方法
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    // 转换成整数
    var toInteger = function (value) {
      var number = Number(value);
      // isNaN 返回0
      if (isNaN(number)) { return 0; }
      // number为0 或者不是有限数字， 则返回 number
      if (number === 0 || !isFinite(number)) { return number; }
      // 如果以上条件不符，则返回如下，number 的绝对值向下去整，然后再确定下number 是正数还是负数
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    // 最大有效数字
    var maxSafeInteger = Math.pow(2, 53) - 1;
    // 返回一个有效数字
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };
    // 若value为 set对象 则 转为数组
    var toItems = function (value) {
      // support set
      if (value.size > 0 && value.values) {
        let values = value.values()
        var it = values.next()
        var o = []
        while (!it.done) {
          o.push(it.value)
          it = values.next()
        }
        return o
      }
      return Object(value);
    };
    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {

      var C = this;

      // arrayLike 为 undefined or null 则抛出异常
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }
      // 
      var items = toItems(arrayLike);

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
```