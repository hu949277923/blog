# 【webpack第3期】webpack实现打包的hash值根据内容进行改变

最近开发项目发现每次发版后hash都会修改，无法缓存文件，故研究了下webpack的hash 和 chunkhash的区别

## hash

使用 hash 对js和css进行签名时，每一次hash值都不一样，导致无法利用缓存。

- **原因：**因为 hash 字段是根据每次编译compilation的内容计算所得，也可以理解为项目总体文件的hash值，而不是针对每个具体文件的。(所以每一次编译都会有一个新的hash，并不适用)。

- **解决:** 不用hash，而用 chunkhash (js和css要使用chunkhash)， chunkhash 的话每一个js的模块对应的值是不同的(根据js里的不同内容进行生成)

## 图片和字体图标的chunkhash问题

- 前面有提到，hash在js和css中不实用，所以在项目中所有的文件都准备用 chunkhash ，但是又有了新的问题-img和font等资源中，使用 chunkhash 会报错
- 解决:因为 chunkhash 只适用于js和css，img中是没有这种东西的，仍然需要用到 hash (这个hash有点区别，每一个资源本身有自己的hash)

## chunkhash重复

打包时发现，js和js引入的css的 chunkhash 是相同的，导致无法区分css和js的更新，如下
```
app_96ac1.css
app_96ac1.js
```
- **原因:**因为webpack的编译理念，webpack将css视为js的一部分，所以在计算chunkhash时，会把所有的js代码和css代码混合在一起计算 

- **解决:**css是使用 ExtractTextPlugin 插件引入的，这时候可以使用到这个插件提供的 contenthash ，如下(使用后css就有独立于js外的指纹了)，
```
//提取css文件
new ExtractTextPlugin({
     filename:'css/[name].[chunkhash:8].css'  //提取chunkhash8位码
})
```
**注意**在新版本中，我在webpack3中测试的是，修改css的内容并不会引起js中的 chunkhash 变动(原因估计是webpack内置的算法变为了只计算js chunk)，所以css请务必使用 contenthash ，否则修改后无法生成新的签名，而是会覆盖以前的资源
