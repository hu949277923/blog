"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 函数声明
function fun1(a, b) {
    return 'func1';
}
// 可选参数 加？号 或者加默认值
function fun4(a, b, c) {
    if (c === void 0) { c = 19; }
    return 'func4';
}
// 任意个数参数
function fun2(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return 'func2';
}
fun1(1, 2);
fun2(1, 2, 3, 4, 5);
fun1(1, 2);
// 函数表达式
var func3 = function (a, b) {
    return 'func3';
};
// 函数参数为函数
var a = function () { };
var func5 = function (a, b) {
    return 'func5';
};
//# sourceMappingURL=08-function-types.js.map