# 【npm第3期】cross-var

在npm script中使用变量，linux和window环境下的使用方式不一样：linux用$npm_package_version;window用%npm_package_version%,为了解决多平台的兼容问题，开发了cross-var 工具，具体使用如下：

## 安装

```
$ npm install cross-var -D
```

## 修改npm script

``` package.json
// 修改前
{
  "version": "1.0.0",
  "config": {
    "port": "1337"
  },
  "scripts": {
    "prebuild": "rimraf public/$npm_package_version",
    "build:html": "jade --obj data.json src/index.jade --out public/$npm_package_version/",
    "server:create": "http-server public/$npm_package_version -p $npm_package_config_port",
    "server:launch": "opn http://localhost:$npm_package_config_port"
  }
}
```

``` package.json
// 修改后
{
  "version": "1.0.0",
  "config": {
    "port": "1337"
  },
  "scripts": {
    "prebuild": "cross-var rimraf public/$npm_package_version",
    "build:html": "cross-var jade --obj data.json src/index.jade --out public/$npm_package_version/",
    "server:create": "cross-var http-server public/$npm_package_version -p $npm_package_config_port",
    "server:launch": "cross-var opn http://localhost:$npm_package_config_port"
  }
}
```

**注意**当npm script中有两条子命令时，我们需要用引号把整个命令包起来（注意这里是用的双引号，且必须转义），然后在前面加上 cross-var