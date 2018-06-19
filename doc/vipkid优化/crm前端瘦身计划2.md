[wiki-crm前端瘦身计划2](http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=32363203)
# 已优化

## 1. css代码提取

#### 优化前(gzip)：all:980.81kb

#### 优化后(gzip)：all:914.77kb

```
$ npm install -D extract-text-webpack-plugin

// webpack.config.js
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module: {
    loaders: [
        {
            test: /\.css$/,
            // loader: 'style-loader!css-loader',
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
    ]
},
plugins: {
    new ExtractTextPlugin('css/[name]_[hash:5].css', {
      disable: false,
      allChunks: true
    })
}
```

## 2. 打包编译后id改为name

配置webpack.config.js
bad:

```
output: {
    chunkFilename: '[id]_[hash:5].js'
  },
```
good:
```
output: {
    chunkFilename: '[name]_[hash:5].js'
  },
```
修改路由引入方式
bad:
```
export default [
    {
        path: '/home',
        component: resolve => require(['./page/home/index.vue'], resolve)
    }
]
```
good:
```
const Home = r => require.ensure([], () => r(require('./page/home/index.vue')), 'Home')
export default [
  {
    path: '/home',
    component: Home
  }
]
```

## 3. 异步引入highcharts库和gb2260库

bad:
```
import Highcharts from 'highcharts'

Highcharts.chart('container', {
    ...
})
```
good: 在组件调用时，异步引入
```
require.ensure([],() => {
        const Highcharts = require('highcharts')
        ...
})
```

# 待确认

- element-ui建议升级版本，
- crm大部分引用了vnpm依赖包，需要对各个包进行优化。如：element-ui是否可以考虑按需加载
- 考虑到node在项目中，主要处理功能有文件监听、路由、代理等。这些功能vue-cli已经实现，是否重新调整架构，基于vue-cli进行调整。