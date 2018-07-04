# 【webpack第2期】webpack打包编译性能测试工具及用法

近期在优化项目时发现构建特别慢，故希望可以通过一些工具来统计一下，我们项目基于vue-cli创建，我这边就直接在此基础上进行介绍

## 生成stats.json文件


```
$ webpack --profile --config build/webpack.dev.conf.js --json > stats.json
```
以上会在项目根目录输出dev构建时的明细，stats.json文件中字段time为编译时间，单位毫秒（ms）

## 浏览器打开并上传stats.json

```
$ curl http://webpack.github.io/analyse/#assets
```

## 上传成功后会到home主页面，大致包括如下：

- webpack及当前版本
- 打包编译总时长
- hash
- modules
- chunks
- assets
- warnings/errors


## Webpack Chart可以详细的看到各个模块的依赖包及依赖包的大小等信息。

```
$ curl http://alexkuz.github.io/webpack-chart/
```