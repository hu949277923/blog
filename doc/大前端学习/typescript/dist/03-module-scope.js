/**
 * 作用域问题
 * 默认全局作用域，会与别的问题冲突
 * 解决方案： 1 立即执行函数 2 模块方式导出
 */
//  const a = 'dsad'
// way 1
(function () {
    var a = '123';
});
// way 2 以模块方式导出
// export { a }
//# sourceMappingURL=03-module-scope.js.map