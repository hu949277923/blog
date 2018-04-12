# 【centos7.2部署第5期】centos7.2 redis4.0.2开机自启动

我的redis安装目录在/tools/redis/redis-4.0.2

```
$ cd /tools/redis/redis-4.0.2
$ vim redis.conf
// 设置 daemonize 为 yes
// 按esc进入操作命令
$ :wq 保存并退出
$ cd / 到根目录
$ vim /etc/init.d/redis //新建redis文件，文件内容如下
```
redis文件内容
```
kconfig: 2345 10 90  
#redis服务必须在运行级2，3，4，5下被启动或关闭，启动的优先级是90，关闭的优先级是10。
# description: Start and Stop redis   

PATH=/usr/local/bin:/sbin:/usr/bin:/bin  
export PATH 
REDISPORT=6379 #端口号，这是默认的，如果你安装的时候不是默认端口号，则需要修改
EXEC=/tools/redis/redis-4.0.2/src/redis-server  #redis-server启动脚本的位置，你如果忘了可以用find或whereis找到   
REDIS_CLI=/tools/redis/redis-4.0.2/src/redis-cli  #redis-cli客户端启动脚本的位置，你如果忘了可以用find或whereis找到   

PIDFILE=/var/run/redis_6379.pid   #这个也可以用find或whereis找到
CONF="/tools/redis/redis-4.0.2/redis.conf"  #redis.conf配置文件的位置，你如果忘了可以用find或whereis找到
AUTH="1234"  

case "$1" in   
        start)   
                if [ -f $PIDFILE ]   
                then   
                        echo "$PIDFILE exists, process is already running or crashed."  
                else  
                        echo "Starting Redis server..."  
                        $EXEC $CONF   
                fi   
                if [ "$?"="0" ]   
                then   
                        echo "Redis is running..."  
                fi   
                ;;   
        stop)   
                if [ ! -f $PIDFILE ]   
                then   
                        echo "$PIDFILE exists, process is not running."  
                else  
                        PID=$(cat $PIDFILE)   
                        echo "Stopping..."  
                       $REDIS_CLI -p $REDISPORT  SHUTDOWN    
                        sleep 2  
                       while [ -x $PIDFILE ]   
                       do  
                                echo "Waiting for Redis to shutdown..."  
                               sleep 1  
                        done   
                        echo "Redis stopped"  
                fi   
                ;;   
        restart|force-reload)   
                ${0} stop   
                ${0} start   
                ;;   
        *)   
               echo "Usage: /etc/init.d/redis {start|stop|restart|force-reload}" >&2  
                exit 1  
esac

```

保存并退出,设置权限
```
$ chmod 777 /etc/init.d/redis
```
进入根目录， 执行 etc/init.d/redis start
```
$ cd /
$ etc/init.d/redis start
```

自此完成



