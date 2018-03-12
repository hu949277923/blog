# 【第4期】CentOS7.2 下安装MongoDB

## 创建配置文件
```
vim /etc/yum.repos.d/mongodb-org-2.6.repo
```
> [mongodb-org-3.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.2.asc
## 安装mongodb

```
// 安装
yum install -y mongodb-org

// 启动mongodb
service mongod start

// 暂停服务
service mongod stop

// 重启服务
service mongod restart

// 开机启动
chkconfig mongod on
另：可以重启一下服务器进行测试，shutdown -r now



```
## 安装mongoose
```
npm install mongoose --save
```
mongodb的CURD如下：
```
————进入mongo shell页面————
mongo

————创建数据库/创建表————
use testdatabase
db.createCollection('testtable')

————显示所有表————
use testdatabase
show collections

————插入数据————
use testdatabase
coll = db.getCollection('testtable')
coll.insert({name:"ZhangSan",password:"123456"})
coll.insert({name:"WangEr",password:"nicai"})

————查询数据————
use testdatabase
coll = db.getCollection('testtable')
coll.find()
```
