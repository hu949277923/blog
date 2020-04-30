# 【tools第5期】nvm安装

## 安装

1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

2. 通过ls -al 查看～ 目录，可以发现.nvm，然后将如下代码拷贝到~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc。
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. 重启item2
4. 输入nvm --version 可看到当前版本，代表安装成功


## nvm  下载太慢问题解决 

更换下载源(默认是从 http://nodejs.org/dist/ 下载的, 国外服务器, 必然很慢),变更下载源地址位淘宝镜像地址如下：

```
NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
```

## nvm 安装完成后输入nvm命令还是么有效果的原因？？

需要重启终端（item2）

