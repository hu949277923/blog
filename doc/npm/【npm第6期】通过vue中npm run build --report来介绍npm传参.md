# 【npm第6期】通过vue中npm run build --report来介绍npm传参

最近发现vue中可以通过npm run build --report来调用webpack-bundle-analyzer插件，具体相关代码如下：
```
// webpack.prod.conf.js
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
// config/index.js
build: {
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report
}
```
实际上执行npm run build --report时，在process.env对象内添加了一个属性。如下：
```
{
  npm_config_report: "true"
}
```
所以我们可以通过process.env.npm_config_report获取它的值为true，由于webpack.prod.conf.js调用config/index.js中的bundleAnalyzerReport 所以会调用webpack-bundle-analyzer插件