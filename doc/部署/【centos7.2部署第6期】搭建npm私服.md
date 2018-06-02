# 【centos7.2部署第6期】npm私服及npm包管理

## 初步认识npm私服

 npm私有包保存在自己的内部服务器中，不是公共仓库

## 有哪些搭建npm私有仓库的工具

- sinopia
- cnpm
- verdaccio

## 运用sinopia搭建简易npm仓库

### sinopia介绍

Sinopia 是一个零配置的私有的带缓存功能的npm包管理工具，作者是是`rlidwka`，使用sinopia，你不用安装CouchDB或MYSQL之类的数据库，Sinopia有自己数据库，如果要下载的包不存在，它将自动去你配置的npm地址上去下载，而且硬盘中只缓存你下载过的包，以节省空间。

### 部署安装（确认已安装node、npm）

```
$ npm install -g sinopia
```

### 启动

```
$ sinopia
 warn  --- config file  - .....\AppData\Roaming\sinopia\config.yaml
 warn  --- http address - http://localhost:4873/

```

### 访问

```
$ curl http://localhost:4873/
```

###  使用pm2

```
$ npm install -g pm2
$ pm2 start `which sinopia`
```

### Sinopia一些配置

Sinopia的特点是，你在哪个目录运行，它的就会在对应的目录下创建自己的文件。目录下默认有两个文件：config.yaml和storage，htpasswd是添加用户之后自动创建的。

**config.yaml配置文件**
```
#
# This is the default config file. It allows all users to do anything,
# so don't use it on production systems.
#
# Look here for more config file examples:
# https://github.com/rlidwka/sinopia/tree/master/conf
#

# path to a directory with all packages
storage: ./storage  //npm包存放的路径

auth: // 验证相关
  htpasswd:
    file: ./htpasswd   //保存用户的账号密码等信息
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    max_users: -1  //默认为1000，改为-1，禁止注册

# a list of other known repositories we can talk to
uplinks: // 配置上游的npm服务器，主要是用于请求的仓库不存在时去上游服务器拉取
  npmjs:
    url: http://registry.npm.taobao.org/  //默认为npm的官网，由于国情，修改 url 让sinopia使用 淘宝的npm镜像地址
    
packages:  / 配置模块/包的发布(publish)、下载(access)的权限等
  '@*/*':  // 某下属的某项目
    # scoped packages
    access: $all
    publish: $authenticated

  '*': // 匹配项目名称(名称在package.json中有定义)
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: sinopia.log, level: info}

# you can specify listen address (or simply a port) 
listen: 0.0.0.0:4873  ////默认没有，只能在本机访问，添加后可以通过外网访问。˜

```
#### 部分配置字段

- storage: 仓库保存的路径
- web: 是否支持WEB接口
- auth: 验证相关
- uplinks: 配置上游的npm服务器，主要是用于请求的仓库不存在时去上游服务器拉取
- packages: 配置模块/包的发布(publish)、下载(access)的权限等
- listen: 配置监听端口与主机名
- max_users: -1表示我们将最大用户数设置为－1，表示禁用 npm adduser 命令来创建用户，不过我们仍然可以通过当前目录下创建htpasswd 文件来初始化用户。如：

```
bill:{SHA}BUmfRIFlHVGjlBGyctmGxzuc2gk=:autocreated 2018-05-23T03:23:19.782Z
```
上面的加密规则：SHA1哈稀之后再转换成 Base64 输出，后面跟时间

- access: 表示哪一类用户可以对匹配的项目进行安装(install) 
- publish:  表示哪一类用户可以对匹配的项目进行发布(publish)
- proxy: 如其名，这里的值是对应于 uplinks 的名称，如果本地不存在，允许去对应的uplinks去取。
access 与 publish 权限配置一般为：

1. $all 表示所有人都可以执行对应的操作
2. $authenticated 表示只有通过验证的人可以执行对应操作
3. $anonymous 表示只有匿名者可以进行对应操作（通常无用）
```
// 运行
$ sinopia -c config.yaml
```
## 客户端使用

- 安装nrm: 全局安装nrm可以快速修改,切换,增加npm镜像地址。

```
$ npm install -g nrm # 安装nrm
$ nrm add XXXXX http://XXXXXX:4873 # 添加本地的npm镜像地址
$ nrm use XXXX # 使用本址的镜像地址
```

- nrm的其他命令

```
$ nrm --help  # 查看nrm命令帮助
$ nrm ls # 列出可用的 npm 镜像地址
$ nrm use taobao # 使用`淘宝npm`镜像地址
```

- 创建用户与发布包 创建新用户

1. 确保自己已经切换到配置的代理

```
bogon:blog bill$ nrm ls

* npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
  sinopia  http://140.143.193.78:8080/
  vnpm --- http://npm.vipkid.com.cn/

bogon:blog bill$ nrm use sinopia


   Registry has been set to: http://140.143.193.78:8080/

bogon:blog bill$ nrm ls

  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
  taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  rednpm - http://registry.mirror.cqupt.edu.cn/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
* sinopia  http://140.143.193.78:8080/
  vnpm --- http://npm.vipkid.com.cn/
```

2. 运行npm adduser,填写信息，注册账号。如果已经有账号，直接运行npm login即可

```
bogon:blog bill$ npm adduser
Username: bill
Password:
Email: (this IS public) a@a.com
```
3. 运行$ npm publish发布新包。

```
$ npm publish
```
