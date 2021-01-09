/**
 * Array 类型
 *
 */
// 纯数字类型数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 使用强类型优势
// 之前需要判断每一个成员类型是不是数字
// 现在加一个数字注解即可
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (prev, curr) { return prev + curr; }, 0);
}
// 如果现象传一个非数字值就会报错
sum(1, 2, 3);
//# sourceMappingURL=05-array-types.js.map