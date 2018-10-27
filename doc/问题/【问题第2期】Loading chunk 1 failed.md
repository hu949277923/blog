# 【问题第2期】Loading chunk 1 failed

最近开发vue项目中，偶尔出现 Loading chunk 1 failed的错误。

由于我们每次发版时，修改的文件的文件名会被修改，同时，原版本的文件会被删除。这样，在请求被修改的文件时，由于原文件被删除，所以无法响应。在切换路由时，会报错。

解决方案，在路由切换时，捕获异常，如果提示信息如上所示，则强制刷新页面。具体如下。

```
router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  if (isChunkLoadFailed) {
    location.reload()
  }
})
```

如有更好的解决方案，欢迎大家留言