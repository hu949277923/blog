[wiki-crm前端瘦身计划3](http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=33132868)


# 1. jquery cdn加载

# 2. vue多个不同版本会同时打包多个，故版本统一
减少38.53k

# 3. moment.js 去掉多语言,保留zh-cn
优化前：moment.js:65.14
优化后：moment.js:17.34

# 4.提取通用模块
优化前：all:914.77kb
优化后：all:570.36kb
'http-vkm', 'user-util-vkm', 'pinyininput-vkm'

# 5.由于全局已经引入element-ui，所以局部无需引入

`去掉 element-ui,因为已经全局引入`
- staff/staffManager/src/components/tree-select/tree.vue 
- src/page/staff/staffManager/src/transDept.vue
old:
```
import { Message } from 'element-ui'

export default {
    methods: {
        showTreeError(error) {
            Message.info(error.message)
        }
    }
}
```
good:
```
export default {
    methods: {
        showTreeError(error) {
            this.$message.info(error.message)
        }
    }
}
```

- 目录结构调整
- npm包依赖
- dependencies 部分包提到devDependencies


