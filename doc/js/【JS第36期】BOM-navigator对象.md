# 【JS第36期】BOM-navigator对象

Navigator 对象包含有关浏览器的信息。下表列出所有navigator对象的方法及属性。

| 属性或方法 | 描述 | IE | Firefox | Safari/Chrome | Opera |
|-----|-----|-----|-----|-----|-----|
| appCodeName | 返回浏览器的名称。通常都是Mozilla,即使用非Mozilla浏览器也是如此 | 3.0+ | 1.0+ | 1.0+ | 7.0+ |
| appMinorVersion | 次版本信息 | 4.0+ | - | - | 9.5+ |
| appName | 完整的浏览器名称 | 3.0+ | 1.0+ | 1.0+ | 7.0+ |
| appVersion | 浏览器的版本 | 3.0+ | 1.0+ | 1.0+ | 7.0+ |
| buildID | 浏览器编译版本 | - | 2.0+ | - | - |
| cookieEnabled | 表示cookie是否启用 | 4.0+ | 1.0+ | 1.0+ | 7.0+ |
| cpuClass |  客户端计算器中使用的cpu类型 | 4.0+ | - | - | - |
| javaEnabled | 表示当前浏览器是否启用了java | 4.0+ | 1.0+ | 1.0+ | 7.0+ |
| language | 浏览器的主语言 | - | 1.0+ | 1.0+ | 7.0+ |
| mimeTypes | 在浏览器中注册的mime类型数组 | 4.0+ | 1.0+ | 1.0+ | 7.0+ |
| onLine | 表示浏览器是否连接到因特网 | 4.0+ | 1.0+ | - | 9.5+ |
| opsProfile | 似乎早就不用了。查不到相关文档 | 4.0+ | - | - | - |
| oscpu | 客户端计算机操作系统或使用的cpu  | - | 1.0+ | - | - |
| platform | 浏览器所在的系统平台 | 4.0+ | 1.0+ | 1.0+ | 7.0+ |
| plugins | 浏览器中安装插件信息的数组 | 4.0+ | 1.0+ | 1.0+ | 7.0+ |
| preference() | 设置用户首选项 | - | 1.5+ | - | - |
| product | 产品名称 | - | 1.0+ | 1.0+ | - |
| productSub | 关于产品的次要信息 | - | 1.0+ | 1.0+ | - |
| registerContentHandler() | 针对特定的mime类型将一个站点注册未处理程序  | - | 2.0+ | - | - |
| registerProtocolHandler() | 针对特定的协议将一个站点注册为处理程序 | - | 2.0+ | - | - |
| securityPolicy | 已废弃。安全策略的名称| - | 1.0+ | - | - |
| systemLanguage | 操作系统的语言 | 4.0+ | - | - | - |
| taintEnabled() | 已经废弃。表示是否允许变量被修改 | 4.0+ | 1.0+ | － | 7.0+ |
| userAgent | 浏览器的用户代理字符串 | 3.0+ | 1.0+ | 1.0+ | 7.0+ |
| userLanguage | 操作系统默认语言 | 4.0+ | - | - | 7.0 |
| userProfile | 借以访问用户个人信息的对象 | 4.0+ | - | - | - |
| vendor | 浏览器的品牌 | - | 1.0+ | 1.0+ | - |
| vendorSub | 有关供应商的次要信息 | - | 1.0+ | 1.0+ | - |

## 检测插件

```
// 检测插件（ie无效）
function hasPlugin(name) {
  name = name.toLowerCase();
  for (var i = 0; i < navigator.plugins.length; i++) {
    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
      return true;
    }
  }
  return false;
}

// 检测 flash
hasPlugin('Flash');
```

在ie中检测插件可以使用专有的ActiveXObject 类型，并创建一个特定的插件实例。ie中是以com对象的方式实现的插件的，而com对象使用唯一标识符来标识。因此，检测插件必须知道其com标识符。如：
```
// 检测ie中插件
function hasIEPlugin(name) {
  try {
    new ActiveXObject(name);
    return true;
  } catch(e) {
    return false;
  }
}
// 检测flash
hasIEPlugin('ShockwaveFlash.ShockwaveFlash')
```

上例中之所以用try...catch是因为创建未知com对象会导致抛出错误。这样，如果实例化成功返回true,否则抛出错误,返回false。由于两种检测方式差异比较大，所以针对每一个插件分别创建检测函数。如：

```
// 检测所有浏览器flash

function hasFlash() {
  var result = hasPlugin('Flash');
  if (!result) {
    result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash')
  }
  return result;
}
// 检测flash 
hasFlash() 
```

## 注册处理程序

registerContentHandler() 有三个参数：要处理的mime类型、可以处理该mime类型的页面的url、应用程序的名字。如：
```
navigator.registerContentHandler('application/rss+xml', 'http://www.somereader.com?feed=%s', 'Some Reader');
```

registerProtocolHandler()有三个参数：要处理的协议、可以处理该页面的url、应用程序的名字。

```
navigator.registerProtocolHandler('mailto', 'http://www.somemailclient.com?cmd=%s', 'Some Mail Client')
```