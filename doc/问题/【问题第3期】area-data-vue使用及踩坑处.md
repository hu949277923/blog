# 【问题第3期】area-data-vue使用及踩坑处

## 安装
 使用 npm 安装
```
npm i --save area-linkage-vue area-data-vue
```

## 使用
```
import Vue from 'vue';
import { pcaa } from 'area-data-vue';
import 'area-linkage-vue/dist/index.css';
import AreaLinkageVue from 'area-linkage-vue';
Vue.prototype.$pcaa = pcaa;

Vue.use(AreaLinkageVue)
```

```
<area-select v-model="selected" :data="$pcaa" :level="0"></area-select>  // 省
<area-select v-model="selected" :data="$pcaa" :level="1"></area-select>  // 省市
<area-select v-model="selected" :data="$pcaa" :level="2"></area-select>  // 省市区
<area-select v-model="selected" :data="$pcaa" :level="3"></area-select>  // 省市区街道

<area-cascader v-model="selected2" :data="$pcaa" :level="0"></area-cascader>  // 省市
<area-cascader v-model="selected2" :data="$pcaa" :level="1"></area-cascader> // 省市区
<area-cascader v-model="selected2" :data="$pcaa" :level="2"></area-cascader> // 省市区街道

```
更多演示访问 [这里](https://liangzibo.github.io/area-linkage-vue/).


## 属性
### area-select 组件
|  参数  |  类型  |  可选值  |  默认值  |  说明  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| type | String |  all/code/text | code | 设置返回的数据格式 |
| placeholders | Array | - | [] | 设置 placeholder text |
| level | Number | 0/1/2/3 | 1 | 设置联动层级(0-只选省份/1-省市联动/2-省市区联动/3-省市区街道联动) |
| size | String | small/medium/large | medium | 设置输入框的大小 |
| disabled | Boolean | - | false | 是否禁用 |
| data | Object | - | - | 地区数据 |
| icon | String | - | area-select-icon | 自定义下拉小图标 |
| disableLinkage | Boolean | - | true | 地区选择是否进行联动 |


### area-cascader 组件
|  参数  |  类型  |  可选值  |  默认值  |  说明  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| type | String |  all/code/text | code | 设置返回的数据格式 |
| placeholder | String | - | '' | 设置 placeholder text |
| level | Number | 0/1/2 | 0 | 设置联动层级(0-省市联动/1-省市区联动/2-省市区街道联动) |
| size | String | small/medium/large | medium | 设置输入框的大小 |
| separator | String | - | '-' | 显示选中文本的分隔符 |
| disabled | Boolean | - | false | 是否禁用 |
| data | Object | - | - | 地区数据 |

## 事件

|  事件名  |  说明  |  参数 |
|  :--:  |  :--:  |  :--: |
| change | 选中值发生变化时触发 | 目前选择的值 |

## 坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑坑

在选择省市县或者初始化回显数据时没有问题的，但是近期工作中的一个需求通过选择地图位置来改变省市县及详细地址。正常思路大致是：将返回的code码赋值selected，组件会自动改变，理想很丰满，现实很骨感。遗憾的是并没有发生变化，通过vue调试工具发现通过prop传入来已经改变的数据，但是页面并没有发生任何变化。如何解决妮？？

因为这组件只有初始化时回显没问题，那当需要改变省市县时我们对这个组件进行初始化，通过这种方案解决来问题，但感觉这时组件的bug,建议修复，有更好的解决方案欢迎留言！！！具体方案如下：

```
<template>
  <area-cascader v-model="selected2" v-if="isInit" :data="$pcaa" :level="0"></area-cascader>
</template>
<script>
export default {
  data() {
    return {
      selected2: [],
      isInit: true
    }
  },
  methods: {
    handleChange(){
      this.isInit = false
      this.selected2 = [140000, 140300, 140311]
      this.$nextTick(() => {
        this.isInit = true
      })
    }
  }
}
</script>
```