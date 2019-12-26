1,  登录跳板机 

**.**.**.** -p 80

2，查看OSS地址

ossutil ls oss://fe-static -s

ossutil ls oss://fe-static/blog/static/img/

ossutil cp /92bill/deploy/code/vfe/blog/dist/static/img/ oss://fe-static/blog/static/img/ -r -u

 

3，添加shell 脚本分发静态资源目录

4.小班课CDN业务

https://help.aliyun.com/document_detail/50561.html?spm=a2c4g.11186623.6.1058.XtdpC5

（1）上传单个文件：

$./ossutil cp a oss://ossutil-test
Succeed: Total num: 1, size: 230. OK num: 1(upload 1 files).
0.699795(s) elapsed
（2）上传文件夹：

$./ossutil cp -r dir oss://ossutil-test
Succeed: Total num: 35, size: 464,606. OK num: 35(upload 34 files, 1 directories).
0.896320(s) elapsed
 

5， 域名加速

92bill.com   全球加速 GTM  国内阿里云、国外Akamai

92bill.com  全球加速 GTM  国内阿里云、国外Akamai

6，小文件阿里OSS地址：

fe-static

 

7，前端项目

blog

示例：

ossutil cp -rf /92bill/deploy/code/vfe/blog/dist/static/ oss://fe-static/blog/static


示例：

  https://fe-static.92bill.com/blog/static/css/home.d10b8680987d00f375a8193f03041f8e.css



 


 

8，对于阿里云存储 CDN目录进行静态资源域名配置，及域名加速配置

blog

线上jenkins环境    ossutil cp -rf /opt/jenkins/workdir/workspace/blog/dist/static  oss://fe-static/blog/static

增加vvos服务增量上传图片

例子：vvos push --accesskey foied3185a35abe0 --secretkey 76d0e41a69e84fvvdsw3as3205fb0 --dir /opt/jenkins/workdir/workspace/blog/dist/static --module blog/static

--dir是本地文件目录 --module是阿里云文件目录，只需要填写oss://fe-static/后边的路径

vvos push --accesskey foied3185a35abe0 --secretkey 76d0e41a69e84fvvdsw3as3205fb0 --dir xxx/.../xxx/static --module xxx/static


 



 

 