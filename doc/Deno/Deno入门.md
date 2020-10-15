# Deno入门

## 因什么而产生的？解决了什么问题？？

- 过去五六年，JavaScript 语言脱胎换骨，ES6 标准引入了大量新的语法特性。其中，影响最大的语法有两个：Promise 接口（以及 async 函数）和 ES 模块。Node.js 对这两个新语法的支持，都不理想。由于历史原因，Node.js 必须支持回调函数（callback），导致异步接口会有 Promise 和回调函数两种写法；
- Node.js 自己的模块格式 CommonJS 与 ES 模块不兼容，导致迟迟无法完全支持 ES 模块。
- Node.js 的模块管理工具 npm，逻辑越来越复杂；模块安装目录 npm_modules 极其庞杂，难以管理。
- Node.js 也几乎没有安全措施，用户只要下载了外部模块，就只好听任别人的代码在本地运行，进行各种读写操作。
- Node.js 的功能也不完整，导致外部工具层出不穷，让开发者疲劳不堪：webpack，babel，typescript、eslint、prettier......

