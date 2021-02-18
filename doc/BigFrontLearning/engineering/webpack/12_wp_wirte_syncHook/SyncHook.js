
const Hook = require('./Hook.js')
const HookCodeFactory = require('./HookCodeFactory')
// 1 定义SyncHook 继承自Hook
// 2 导出SyncHook
// 3 定义Hook类，导出Hook
// 4 根据源码可知，tapAsync、tapPromise、compile继承自Hook，并对其进行类重写,为什么重写？因为我们这里用到的是同步钩子，而同步、异步钩子都继承自Hook，所以对其进行了重写
// 5 重写compile方法
// 6 factory是一个工厂类
// 7 factory.setup将options中taps中的fn放到_x中，
// 8 
class SyncHookCodeFactory extends HookCodeFactory {
  constructor () {
    super()
  }
}
const factory = new SyncHookCodeFactory()
const COMPILE = function(options) {
	factory.setup(this, options);
	return factory.create(options);
};

class SyncHook extends Hook {
  constructor(args) {
    super(args)
    this.compile = COMPILE
  }
}
module.exports = SyncHook