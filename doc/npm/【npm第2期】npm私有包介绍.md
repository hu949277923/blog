# 【npm第2期】npm私有包介绍

change-password-dialog-vkm   修改密码

frame-vkm 公共部分（头部、底部、主体框架）

http-vkm axios封装

main-vkm 入口文件（初始化vue，全局引用如：ui库、路由、store、）等

pinyininput-vkm 模糊搜索  如：学生 ep搜索查询 

sso-sync-page-vkm   跳转登录后，在挂载之前（beforeMount）判断是否登录，如果没有登录跳转登录页，如果已登录，则保存用户信息，重定向指定页面

sso-vkm  登录相关的方法(saveSSOToken()\logout()\getEntity())

staff-queue-check-dialog-vkm  项目中没有用到

staff-structure-check-dialog-vkm  leads队列设置- 添加ep（选择团队dialog）

staff-tree-structure-vkm   组织架构页面 （项目中没有用到）

user-util-vkm 操作user, 如： hasRole()-\hasAuth()-\getEntity()-\login()\logout()

util-vkm  env  判断环境“online”、“pre”、“本地”

vkd-components   http://test-ep.sayabc.com:8099/leads/team  组织架构

项目内部优化
1、 api接口统一封装
2、 目录结构规范化
3、 