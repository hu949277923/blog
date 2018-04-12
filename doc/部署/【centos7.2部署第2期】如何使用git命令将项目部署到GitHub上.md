# 【centos7.2部署第2期】如何使用git命令将项目部署到GitHub上

1. 设置git的user name和email：

```
$ git config –global user.name “YourName”

$ git config –global user.email “YourEmail@email.com”
```
2. 设置ssh. 这样以后再提交时就可以不必再重复输入账号密码了.

```
//输入命令, 用自己GitHub邮件地址替换
$ ssh-keygen -t rsa -b 4096 -C "YourEmail@email.com"
```

3. 创建成功后, 接下来在本地中找到创建好的ssh key, 例如我的地址是`/root/.ssh/`, 通过vim命令打开id_rsa.pub, 复制内容

4. 之后在你的GitHub点击你头像下的setting, 在SSH and GPG keys中, 创建new ssh key 讲刚刚的粘贴的东西复制在上面.最后点击提交

