# 【问题第4期】element-ui(el-time-picker)框架bug

## element-ui 版本

> 2.13.2

## 问题

```html
// html
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.2/lib/index.js"></script>
<div id="app">
<template>
  <el-time-picker
    v-model="value1"
    :picker-options="{
      selectableRange: '00:00:00 - 23:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</template>
</div>
```

```css
// css
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

```

``` js
// js
var Main = {
    data() {
      return {
        value1: null
      };
    },
    watch: {
      value1(){
        console.log(this.value1)
      }
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')
```

> 执行以上代码，通过下拉框选择时间：10:00:00，然后查看控制台打印结果为：Tue Jun 23 2020 10:00:00 GMT+0800 (中国标准时间)，通过手动输入形式输入10:00:00，控制台查看打印结果为：Wed Jan 01 2020 10:00:00 GMT+0800 (中国标准时间) 。经过查看发现两则返回的结果不一致，前者为当前时间的年月日，后者为当前年的1月1日