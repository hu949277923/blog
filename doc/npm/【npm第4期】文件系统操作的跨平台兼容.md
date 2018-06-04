# 【npm第4期】文件系统操作的跨平台兼容

npm script 中涉及到的文件系统操作，而这些基本操作也提供了跨平台兼容的包，如下：

- rimraf 或 del-cli，用来删除文件和目录，实现类似于 rm -rf 的功能

- cpr，用于拷贝、复制文件和目录，实现类似于 cp -r 的功能；

- make-dir-cli，用于创建目录，实现类似于 mkdir -p 的功能；

- cross-var 实现跨平台的变量引用

> **注意**当npm script中有两条子命令时，我们需要用引号把整个命令包起来（注意这里是用的双引号，且必须转义），然后在前面加上 cross-var

- cross-env 设置环境变量

## 安装

```
$ npm i rimraf cpr make-dir-cli -D
```

## 用法

``` package.json
{
  "version": "1.0.0",
  "config": {
    "port": "1337"
  },
  "scripts": {
    "rm": "cross-var rimraf public/$npm_package_version",
    "cp": "cross-var cpr publich/* test/$npm_package_version",
    "mkdir": "make-dir test",
    "build": "cross-env NODE_ENV=dev node test.js"
  }
}
```
