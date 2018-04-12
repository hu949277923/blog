#【centos7.2部署第1期】nodejs及nvm安装

## 步骤一： 部署之前准备工作

1. 购买云服务器 （一般默认安装系统centos-可选）
2. 云服务器厂商会将服务器的相关信息发送给用户。
3. 本地下载Xshell 通过外网ip及用户名密码登录至服务器

## 步骤二： 部署Node.js环境

使用以下任一种方法部署Node.js环境。

### 使用二进制文件安装

该部署过程使用的安装包是已编译好的二进制文件，解压之后，在bin文件夹中就已存在node和npm，无需手工编译。

安装步骤：

1. wget命令下载Node.js安装包。该安装包是编译好的文件，解压之后，在bin文件夹中就已存在node和npm，无需重复编译。

```
wget https://nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.xz
```
2. 解压文件。

```
tar xvf node-v6.9.5-linux-x64.tar.xz
```
3. 创建软链接，使node和npm命令全局有效。通过创建软链接的方法，使得在任意目录下都可以直接使用node和npm命令：

```
ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/local/bin/node
ln -s /root/node-v6.9.5-linux-x64/bin/npm /usr/local/bin/npm
```
4. 查看node、npm版本。
```
 node -v
npm -v
```
5. 至此，Node.js环境已安装完毕。软件默认安装在/root/node-v6.9.5-linux-x64/目录下。如果需要将该软件安装到其他目录（如：/opt/node/）下，请进行如下操作：

```
mkdir -p /opt/node/
mv /root/node-v6.9.5-linux-x64/* /opt/node/
rm -f /usr/local/bin/node
rm -f /usr/local/bin/npm
ln -s /opt/node/bin/node /usr/local/bin/node
ln -s /opt/node/bin/npm /usr/local/bin/npm
```

### 使用NVM安装多版本

NVM（Node version manager）是Node.js的版本管理软件，使用户可以轻松在Node.js各个版本间进行切换。适用于长期做 node 开发的人员或有快速更新node版本、快速切换node版本这一需求的用户。

安装步骤：

1. 直接使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。

```
yum install git
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
```

2. 激活NVM。

```
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
```

3. 列出Node.js的所有版本。

```
nvm list-remote
```
4. 安装多个Node.js版本。

```
nvm install v6.9.5
nvm install v7.4.0
```
5. 运行 `nvm ls` 查看已安装Node.js版本，当前使用的版本为v6.9.5。返回结果如下所示。

```
[root@iZXXXXZ .nvm]# nvm ls
      v6.9.5
->       v7.4.0
      system
stable -> 7.4 (-> v7.4.0) (default)
unstable -> 6.9 (-> v6.9.5) (default)
```

6. 运行` nvm use v7.4.0` 切换Node.js版本至v7.4.0。返回结果如下所示。

```
[root@iZXXXXZ .nvm]# nvm use v7.4.0
Now using node v7.4.0
```
NVM的更多操作请参考帮助文档：
```
nvm help
```

## 步骤三： 部署测试项目

1. 新建项目文件example.js。

```
cd ~
touch example.js
```

2. 使用vim编辑器打开项目文件example.js。

```
yum install vim
vim example.js
```

3. 输入 `i`，进入编辑模式，将以下项目文件内容粘贴到文件中。使用`Esc`按钮，退出编辑模式，输入`:wq`，回车，保存文件内容并退出。**项目文件内容：**
```
const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
```
> **注意：**
项目文件内容中的3000为端口号，可以自行定义。

4. 运行项目。

```
node ~/example.js
```
5. 通过外网ip访问3000端口，会出现`hello world` 。
6. 自此安装完成
