# 为生产构建的Vue应用强制开启Vue Devtools
```
Vue.config.devtools = true 
__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue
```

如果你是一位 Vue 应用开发者，很可能，你的浏览器安装了 Vue.js devtools 浏览器扩展组件；那么你会注意到，当访问一些使用Vue.js创建的网站时，它会提示

> 在此页面检测到了 Vue.js
> 不能进行 Devtools 检查，因为这是Vue的生产模式或者应用作者特地关闭了 Devtools

根据 vue-devtools repo 中的说法，开发者可以通过如下方式强制打开 Devtools （即 Vue Devtools，除非特殊指出，下文均称为 Devtools）

```
// Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development'

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor

// then had to add in ./store.js as well.
Vue.config.devtools = process.env.NODE_ENV === 'development'
```

我们注意到第二条语句，window.VUE_DEVTOOLS_GLOBAL_HOOK.Vue = app.constructor；app 即是 class Vue {} 的实例，app.constructor 即是 class Vue {} 。我们是否可以通过这种方式为生产模式的Vue应用手动打开 Devtools 呢？答案是肯定的。

接下来，我们将以 BiliBili 做为我们的示例应用，你可以通过 Devtools 知道在此网站首页中存在Vue实例。

打开元素查看器，我们可以找到一个 id="app" 的标签，你肯定想到了 new Vue().$mount('#app')，没错，这就是一个Vue根实例的挂载元素，我们在控制台中尝试获取此实例

```
// Vue 实例是挂载在元素的 `__vue__` 属性上的
app = document.querySelector('#app').__vue__

// 获取此实例的构造函数
Vue = app.constructor

// 获取 `Vue` 基类，只有基类上有 `Vue.config` 属性
while (Vue.super) { Vue = Vue.super }

// 尝试打印 Vue.config
console.log(Vue.config)
```

我们已经成功得到了 `Vue` 基类，这和你使用 `import Vue from 'vue'` 等方式引入的`Vue` 没什么不同(当然，取决于应用实际引入的`Vue`)；接下来，就尝试使用上面所说的方法开启 Devtools

```
Vue.config.devtools = true

__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue
```

最后一步，关闭并重新打开“开发者工具”面板，Wow，Devtools的面板出现了！

有同学可能会问上面配置的是Vue的构造器，为什么在打开 Devtools 面板后，可以看到Vue的实例呢？因为在打开 Devtools 面板后，Devtools会广度优先搜索DOM树，如果在某个元素node找到了`__vue__`实例的根实例（`<vm>.$root`），并且构造此根实例的 `Vue.config.devtools == true`，则会将此根实例加入 Devtools。

所以如果一个页面上有多个根实例有不同的Vue基类，需要为每个Vue基类执行`Vue_no_x.config.devtools = true`。

至于 `__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue` ，只用于Devtools内部创建响应式存储所用，可以和创建根实例的Vue基类不同。