"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nums = [100, 200, 300];
var res = nums.find(function (i) { return i > 0; });
var square = res * res;
// 断言方式
// as
var num1 = res;
// <>
var num2 = res; //  jsx 下不能使用，因为有冲突
//# sourceMappingURL=11-type-assertion.js.map