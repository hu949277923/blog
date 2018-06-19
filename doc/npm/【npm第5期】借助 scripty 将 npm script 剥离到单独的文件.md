# 【npm第5期】借助 scripty 将 npm script 剥离到单独的文件

当 npm script 过多或者变得复杂时，会导致 package.json 混乱，可读性差等问题。

这里我们借助 scripty 将 npm script 剥离到单独的文件中，从而把复杂性隔到单独的模块里面，让代码整体看起来更加清晰。如下为一个复杂npm script：

```
"scripts": {
    "eslint": "# 校验js\n  eslint *.js",
    "preeslint": "echo 'preeslint'",
    "lint:css": "# 校验css \t stylelint *.css",
    "lint:json": "jsonlint *.json",
    "lint:markdown": "markdownlint *.md",
    "test": "cross-env NODE_ENV=test mocha test/",
    "all": "npm-run-all lint:css lint:json lint:markdown",
    "all2": "npm-run-all lint:*",
    "//": "test",
    "lint:js:fix": "npm run eslint --fix",
    "pretest": "npm run all2",
    "precover": "npm run cover:cleanup",
    "cover": "nyc --reporter=html npm test",
    "cover:cleanup": "rimraf coverage && rimraf .nyc_output",
    "cover:archive": "cross-var make-dir \"coverage_arhive/$npm_package_version && cpr coverage/* coverage_arhive/$npm_package_version\"",
    "postcover": "npm-run-all cover:archive  --parallel cover:serve cover:open",
    "dummy": "cross-var echo $npm_package_version",
    "cover:serve": "cross-var http-server coverage_arhive/$npm_package_verdsion -p $npm_package_config_port",
    "cover:open": "cross-var opn http://localhost:$npm_package_config_port"
  },
```

我们就以上进行修改

## 安装 scripty

```
$ npm install scripty --save-dev
```

## 创建目录和文件

这里创建的目录和文件要与命令一一对应。如：

```
$ mkdir scripts/cover.sh
$ mkdir scripts/cover/serve.sh
$ mkdir scripts/cover/open.sh
```

**注意** 脚本需增加可执行权限是必须的，否则 scripty 执行时会报错

```
$ chmod -R a+x scripts/**/*.sh
```

## 修改 .sh文件

```
// scripts/cover.sh

#! /usr/bin/env bash

# remove old coverage reports
rimraf coverage && rimraf .nyc_output

# run test and collect new coverage
nyc --reporter=html npm test

make-dir -p coverage_arhive/$npm_package_version

cp coverage/* coverage_arhive/$npm_package_version

npm-run-all --parallel cover:serve cover:open

// scripts/cover/serve.sh

#!/usr/bin/env bash

http-server coverage_arhive/$npm_package_verdsion -p $npm_package_config_port

// scripts/cover/open.sh

#!/usr/bin/env bash

sleep 1

opn http://localhost:$npm_package_config_port

```

 > shell 脚本里面是可以随意使用 npm 的内置变量和自定义变量的

 ## 修改 package.json

 ```
 "scripts": {
    "eslint": "# 校验js\n  eslint *.js",
    "preeslint": "echo 'preeslint'",
    "lint:css": "# 校验css \t stylelint *.css",
    "lint:json": "jsonlint *.json",
    "lint:markdown": "markdownlint *.md",
    "test": "cross-env NODE_ENV=test mocha test/",
    "all": "npm-run-all lint:css lint:json lint:markdown",
    "all2": "npm-run-all lint:*",
    "//": "test",
    "lint:js:fix": "npm run eslint --fix",
    "pretest": "npm run all2",
    "dummy": "cross-var echo $npm_package_version",
    "cover": "scripty",
    "cover:serve": "scripty",
    "cover:open": "scripty"
 }
 ```

 ## 测试过程

 ```
 $ npm run cover

> init-npm@0.1.1 cover /vipkid/learn/npm/init-npm
> scripty

Executing "/vipkid/learn/npm/init-npm/scripts/cover.sh":

> #! /usr/bin/env bash
>
> # remove old coverage reports
> rimraf coverage && rimraf .nyc_output
>
> # run test and collect new coverage
> nyc --reporter=html npm test
>
> make-dir -p coverage_arhive/$npm_package_version
>
> cp coverage/* coverage_arhive/$npm_package_version
>
> npm-run-all --parallel cover:serve cover:open
>



> init-npm@0.1.1 pretest /vipkid/learn/npm/init-npm
> npm run all2


> init-npm@0.1.1 all2 /vipkid/learn/npm/init-npm
> npm-run-all lint:*


> init-npm@0.1.1 lint:css /vipkid/learn/npm/init-npm
> # 校验css 	 stylelint *.css


> init-npm@0.1.1 lint:json /vipkid/learn/npm/init-npm
> jsonlint *.json

{
  "test": "aaa"
}

> init-npm@0.1.1 lint:markdown /vipkid/learn/npm/init-npm
> markdownlint *.md


> init-npm@0.1.1 test /vipkid/learn/npm/init-npm
> cross-env NODE_ENV=test mocha test/

hello


  0 passing (1ms)

Specify at least one path

> init-npm@0.1.1 cover:serve /vipkid/learn/npm/init-npm
> scripty


> init-npm@0.1.1 cover:open /vipkid/learn/npm/init-npm
> scripty

Executing "/vipkid/learn/npm/init-npm/scripts/cover/serve.sh":

> #!/usr/bin/env bash
>
> http-server coverage_arhive/$npm_package_verdsion -p $npm_package_config_port
>


Executing "/vipkid/learn/npm/init-npm/scripts/cover/open.sh":

> #!/usr/bin/env bash
>
> sleep 1
>
> opn http://localhost:$npm_package_config_port
>


Starting up http-server, serving coverage_arhive/
Available on:
  http://127.0.0.1:3000
  http://192.168.48.65:3000
Hit CTRL-C to stop the server

 ```

 