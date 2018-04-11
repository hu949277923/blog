
# 【wepy第1期】 await in async onLoad 无效？
## isssue
```
// 把新建项目的 onLoad 改成这样：

async onLoad() {
    const data = await wepy.login()
    console.log(data)
}
// 输出的是 undefined

// 用的是最新的小程序的开发工具
```
## commented
在1.4.1以后的版本，默认不支持async/await，需要用户手动加入，方法如下：

- 进入项目根目录，安装runtime包
```
npm install wepy-async-function --save
```
- 修改wepy.config.js加入runtime配置
```
 babel: {
    "presets": [
        "env"
    ],
    "plugins": [
        "transform-export-extensions",
        "syntax-export-extensions"
    ]
}
```
- 在app.wpy中引入引入runtime包
```
import 'wepy-async-function'; 
```
- 在app.wpy中使API promise化
```
export default class extends wepy.app {

    constructor () {
        super();
        this.use('promisify');
    }

}
```
- 重启编译
wepy build --no-cache

