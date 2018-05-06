# 【JS第35期】BOM-location对象

location对象即是window对象的属性，也是document对象的属性。

## location属性

| 属性 | 描述 | 
|-----|-----|
| hash | 返回url的hash, 如果没有则返回空字符串 |
| host | 返回服务器名称和端口号 |
| hostname | 返回不带端口号的服务器名称 |
| href | 返回当前加载页面的完整url |
| pathname | 返回url中的目录或文件名 |
| port | 返回端口号 |
| protocol |  返回使用协议 |
| search | 返回url查询字符串 |

## 位置操作

location.assign() 立即打开新url并在浏览器历史记录中生成一条新记录。如果将location.href或window.location设置一个url,也会默认调用assign()方法。

可以通过修改location对象的属性来改变当前加载的页面

可以使用location.replace()打开一个页面，这个页面不会缓存到历史记录中。

location.reload()会重新加载当前显示的页面。如果不传入参数，页面会优先加载本地缓存，如果传入true则页面会直接请求服务器进行加载页面
