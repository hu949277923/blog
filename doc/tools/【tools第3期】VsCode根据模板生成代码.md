# 【tools第3期】vsCode根据模板生成代码

新建.vue文件后，vsCode能够根据配置，自动生成我们想要的内容。

## 方法

打开vsCode编辑器，依次选择"文件->首选项->用户代码片段"，此时，会弹出一个搜索框，我们输入vue， 如下：
![盗图https://www.cnblogs.com/fayin/p/7910518.html](https://images2018.cnblogs.com/blog/1085489/201711/1085489-20171128160404769-1914197832.png)

选择vue后，vsCode会自动打开一个名字为vue.json的文件，复制以下内容到这个文件中：

```
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<!-- $0 -->",
      "<template>",
      "  <div></div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  data () {",
      "    return {",
      "    };",
      "  },",
      "",
      "  components: {},",
      "",
      "  computed: {},",
      "",
      "  mounted: {},",
      "",
      "  methods: {}",
      "}",
      "",
      "</script>",
      "<style lang='stylus' scoped>",
      "</style>"
  ],
    "description": "Create vue template"
  }
}
```

保存后关闭这个文件。


**注意** $0 表示你希望生成代码后光标的位置 ; prefix 表示生成对应预设代码的命令

例如：我们新建一个名为index.vue的文件，输入vue按下enter，就会自动生成内容啦。如下：

```
<!--  -->
<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style lang='stylus' scoped>
</style>
```