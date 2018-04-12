# 【centos7.2部署第3期】centos7.2 安装 redis4.0.2
首先确保安装gcc, gcc-c++,如果没有则优先安装
```
 yum install gcc
 yum install gcc-c++

```
```
wget wget http://redis.googlecode.com/files/redis-4.0.2.tar.gz

tar zxvf redis-4.0.2.tar.gz

cd redis-4.0.2

make  #直接make

```

make 结束后，进入redis-4.0.2的src目录下

```
make test
```
这里出现了一个报错 You need tcl 8.5 or newer in order to run the Redis test,执行以下命令

```
yum install tcl
```
再执行`make test`

下面来试着启动一下，并查看相应的端口是否已经启动：

## 启动redis

```
$ src/redis-server ./redis.conf
```
并查看相应的端口是否已经启动

```
$ netstat -tlnp
tcp        0      0 0.0.0.0:6379                0.0.0.0:*                   LISTEN      6432/redis-server
```

此时启动所有的配置都是默认的端口是6379，可以看到redis是前台运行。

说明redis已经安装好了，那就将redis-4.0.2的文件夹统一放到 /usr/local/redis里。


## 后台启动redis

打开文件redis.conf,修改 daemonize no为 daemonize yes，然后重新启动下redis：

```
/usr/local/redis/src/redis-server  /usr/local/redis/redis.conf
```

就可以看出 redis为后台运行了。

## 关闭redis

```
进入src目录下，执行./redis-cli shutdown
```


