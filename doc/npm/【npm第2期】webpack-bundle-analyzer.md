# 【npm第2期】webpack-bundle-analyzer

webpack-bundle-analyzer可以将打包后的内容束展示为方便交互的直观树状图，让你明白你所构建包中真正引入的内容；我们可以借助她，发现它大体有哪些模块组成，找到不合时宜的存在，然后优化它。

## 安装

```
$ npm install --save-dev webpack-bundle-analyzer
```

## 用法

```
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

## 访问

```
$ curl http://localhost:8888
```