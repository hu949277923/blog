[wiki-crm前端瘦身计划1](http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=32358036)
# 已优化

## 1. UglifyJsPlugin压缩代码 

#### 优化前(gzip)：. all:2.65mb

#### 优化后(gzip)：all:1.42mb

### 配置如下：

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin’)

plugins:[
    new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                warnings: false
            }
        },
        sourceMap: true,
        parallel: true
    })
]
```

## 2.scope替换为slot-scope(在 2.5.0+ 中被 slot-scope 替代)

```
// Bad:
<template scope="scope”></template>
// Good:
<template slot-scope="scope”></template>
```
## 3.在项目启动时会提示vkd-components 找不到element-ui？

> 在webpack配置如下即可解决：

```
resolve：{
  alias: {
    'element-ui$': path.join(__dirname, './node_modules/main-vkm/node_modules/element-ui/lib/element-ui.common.js')
  }
}
```

## 4.流转倒计时，多个模块用到是否可以封住成组件调用。

```
<template>
    <time-down  :endTime="leads.expireTime"></time-down>
</template>

<script>
Import TimeDown from './detail/timeDown.vue’
export default{
    Data: {
        Return: {
            expireTime: ‘1528441966971'
        }
  }
    components: {
        TimeDown
    }
}
</script>
```
## 5. loadsh按需加载

```
$ npm install -D babel-plugin-lodash

// .babelrc

{
  "plugins": [
    "lodash"
  ]
}

```

## 6. 提取通用文件vue,jquery,element-ui

#### 优化前(gzip)：all:1.42mb
#### 优化后(gzip)：all:980.81kb

> webpack配置

```
{
    entry:{
        vendor: ['jquery', 'element-ui', 'vue'],
    },
    plugins: {
        new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        // ( 公共chunk(commnons chunk) 的名称)
        filename: 'vendor.js'
    })
}
```

 ，l

- webpack版本过低，建议升级
- 目录结构规范化
- require 改为通过import引入。tree shaking 依赖于ES2015 模块系统中的静态结构特性，例如 import 和 export
- api统一封装
- 项目中vue版本不同，打包后，会出现2个版本的代码，建议项目中版本与组建版本统一(由于依赖一对一的一些模块导致)