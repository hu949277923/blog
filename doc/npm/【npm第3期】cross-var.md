# 【npm第3期】cross-var\del-cli\cpr\make-dir-cli

到目前为止，如果你在 Linux、Mac 平台做开发，所有的 npm script 都会顺利运行，但是 Windows 下面的同学可能就比较痛苦了，因为不是所有的 shell 命令都是跨平台兼容的，甚至各种常见的文件系统操作也是不兼容的。

实际上社区中已经有非常多的小工具可以帮我们优雅的实现跨平台的 npm script，下面我们探索下如何实现跨平台的文件系统操作、变量引用、环境变量设置。


## 文件系统操作的跨平台兼容

- rimraf 或 del-cli，用来删除文件和目录，实现类似于 rm -rf 的功能；
- cpr，用于拷贝、复制文件和目录，实现类似于 cp -r 的功能；
- make-dir-cli，用于创建目录，实现类似于 mkdir -p 的功能；