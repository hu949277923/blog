
/**
 * 原始数据类型
 */
const a: string = 'foobar'
const b: number = 100 // NaN Infinity

const c: boolean = true

// const d: boolean = null 需要关闭严格模式才可以赋null

const e: void = undefined

const f: null = null

const g: undefined = undefined

/**
 * 标准库声明
 * 
 * 标准库就是内置对象所对应的声明
 */
const h: symbol = Symbol() // 需要设置配置文件 target 为es2015才可以支持

// Promise

// 如何支持es6以后的语法尼？？ 
// 在配置文件中配置target 为对应的版本
// 如果想支持es5以后的版本尼？
// 在配置文件中配置lib, 将需要支持的版本添加到lib中即可入：lib: ["ES2015"]
// 我们到01-getting-started.ts去查看console下面有报错提示，这是因为console对象在浏览器环境中是bom对象所提供的，而我们设置的lib中只设置了ES2015，所以我们需要将默认的标准库都添加进来
// 所以我们需要在lib中加入dom lib: ["ES2015", "DOM"],这样就不报错了

/**
 * 中文错误消息
 * 
 * 如何显示中文错误消息？？
 * 1 yarn tsc --locale zh-CN
 * 2 vcode 配置选项中配置 settings->typescript locale -> 选择 zh-CN
 */
// const error: string = 100
