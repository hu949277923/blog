# mac 本地文件与服务器Linux文件之间的相互传输
可以简单用scp 命令来实现

查看scp帮助：sup -h

输出信息如下：usage: scp [-12346BCEpqrv] [-c cipher] [-F ssh_config] [-i identity_file]  [-l limit] [-o ssh_option] [-P port] [-S program][[user@]host1:]file1 … [[user@]host2:]file2

OPTIONS：

-v  显示进度。可以用来查看连接、认证、或是配置错误

-P 选择端口

-r 复制目录

1、从本地将文件传输到服务器
scp [本地文件的路径]   [服务器用户名]@[服务器地址]:[服务器上存放文件的路径]

scp /Users/mac/Desktop/test.txt root@192.168.1.1:/root

2、从本地将文件夹传输到服务器
scp -r [本地文件的路径]   [服务器用户名]@[服务器地址]:[服务器上存放文件的路径]

scp -r /Users/mac/Desktop/test root@192.168.1.1:/root

3、将服务器上的文件传输到本地
scp [服务器用户名]@[服务器地址]:[服务器上存放文件的路径]   [本地文件的路径]

scp root@192.168.1.1:/root/default/test.txt /Users/mac/Desktop

4、将服务器上的文件夹传输到本地
scp -r [服务器用户名]@[服务器地址]:[服务器上存放文件的路径]   [本地文件的路径]

scp -r root@192.168.1.1:/root/default/test /Users/mac/Desktop