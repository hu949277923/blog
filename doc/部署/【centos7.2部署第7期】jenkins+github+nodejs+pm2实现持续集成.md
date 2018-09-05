# 【centos7.2部署第7期】jenkins+github+nodejs+pm2实现持续集成

## jdk安装

1. 下载
```
 $ wget http://download.oracle.com/otn-pub/java/jdk/10.0.2+13/19aef61b38124481863b1413dce1855f/jdk-10.0.2_linux-x64_bin.rpm
```
2. 使用rpm安装
```
 $ rpm -ivh jdk-10.0.2_linux-x64_bin.rpm 
```
3. 设置环境变量
```
 $ vi /etc/profile
```
添加如下内容：
```
 JAVA_HOME=/usr/java/jdk-10.0.2_linux-x64_bin
 JAVA_BIN=/usr/lib/jdk-10.0.2_linux-x64_bin/bin
 PATH=$PATH:$JAVA_HOME/bin
 CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
 export JAVA_HOME JAVA_BIN PATH CLASSPATH
```
让修改生效:
```
$ source /etc/profile
```
4. 验证
```
$  java -version
```

## jenkins 安装
1. 下载
```
$ sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
```
2. 导入秘钥
```
$ sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```
3. 安装
```
$ yum install jenkins
```
4. 配置jenkins端口
```
$ // 查找jenkins安装路径
$ rpm -ql jenkins
```
jenkins相关目录:
```
/etc/init.d/jenkins
/etc/logrotate.d/jenkins
/etc/sysconfig/jenkins // jenkins配置文件，“端口”，“JENKINS_HOME”等都可以在这里配置。
/usr/lib/jenkins // jenkins安装目录，war包会放在这里。
/usr/lib/jenkins/jenkins.war
/usr/sbin/rcjenkins
/var/cache/jenkins
/var/lib/jenkins // 默认的JENKINS_HOME。
/var/log/jenkins // jenkins日志文件。
```
修改端口
```
$ vi /etc/sysconfig/jenkins // 默认为8080
```
5. 启动
```
$ service jenkins start
Starting Jenkins                                           [  OK  ]
```
6. 配置jenkins
```
$ curl http://localhost:8080
```
![盗图1](https://images2015.cnblogs.com/blog/851491/201607/851491-20160715112812404-1410337228.png)
![盗图2](https://images2015.cnblogs.com/blog/851491/201607/851491-20160718160548482-638596.png)
![盗图3](https://images2015.cnblogs.com/blog/851491/201607/851491-20160715113547748-514213497.png)
![盗图4](https://images2015.cnblogs.com/blog/851491/201607/851491-20160715114304795-654409896.png)
![盗图5](https://images2015.cnblogs.com/blog/851491/201607/851491-20160715114738295-841693084.png)

## node项目打包构建配置
![详见](https://www.cnblogs.com/vipzhou/p/7890016.html)
## jenkins自动杀掉衍生进程怎么解决
1. 在execute shell输入框中加入BUILD_ID=DONTKILLME,即可防止jenkins杀死启动的进程
![图1](https://mmbiz.qpic.cn/mmbiz_jpg/A8Nj4MMVrXibXjMtmbT7jkxjA7l9zUgYJnXs58kwchnLj1edL27o6q7JUcia1x5ibOnk0O0e7H1rpm3MPODpA5WqA/0?wx_fmt=jpeg)
2. 临时改变BUILD_ID值,使得jenkins不会找到并结束掉run.sh启动的后台进程

```
OLD_BUILD_ID=$BUILD_ID
echo $OLD_BUILD_ID
BUILD_ID=dontKillMe
./run.sh restart
#改回原来的BUILD_ID值
BUILD_ID=$OLD_BUILD_ID
echo $BUILD_ID
```