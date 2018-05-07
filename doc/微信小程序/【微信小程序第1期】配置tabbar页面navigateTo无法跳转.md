# 【微信小程序第1期】配置tabbar页面navigateTo无法跳转

```
// app.js

tabBar: {
    color: '#999999',
    selectedColor: '#ff6a3c',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
        {
            pagePath: 'pages/suppy/index',
            text: '供应',
            iconPath: 'images/icon_home.png',
            selectedIconPath: 'images/icon_home_active.png'
        }
    ]
}
```

```
// page.js

wx.navigateTo({
    url: '/pages/suppy/index'
})

```

如上代码，tabBar中配置的页面通过navigateTo跳转回会报错(errMsg: "navigateTo:fail can not navigateTo a tabbar page"),解决方案通过switchTab进行跳转。如下：
```
wx.switchTab({
    url: '/pages/suppy/index'
})
```


