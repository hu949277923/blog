# 【JS第37期】BOM-screen对象

screen对象包括浏览器外部的显示器的信息，如：像素宽度高度等。各个浏览器都有不同的属性。如下：

| 属性 | 描述 | IE | Firefox | Safari/Chrome | Opera |
|-----|-----|-----|-----|-----|-----|
| availHeight | 屏幕的像素高度减系统部件高度之后的值 | 1 | 1 | 1 | 1 |
| availLeft | 未被系统部件占用的最左侧的像素值 | | 1 | 1 | |
| availTop | 未被系统部件占用的最上方的像素值 | | 1 | 1 | |
| availWidth | 屏幕的像素宽度减系统部件宽度之后的值 |  1 | 1 | 1 | 1 |
| bufferDepth | 用于呈现屏幕外位图的位数 | 1 | | | |
| colorDepth | 用于表现颜色的位数；多数系统位32位 |  1 | 1 | 1 | 1 |
| deviceXDPI | 屏幕实际的水平dpi | 1 | | | |
| deviceYDPI | 屏幕实际的垂直dpi | 1 | | | |
| fontSmoothingEnabled | 表示是否启用了字体平滑 | 1 | | | |
| height | 屏幕的像素高度 |  1 | 1 | 1 | 1 |
| left | 屏幕的距左边的像素距离 |  | 1 | | |
| logicalXDPI | 屏幕逻辑的水平dpi | 1 |  | | |
| logicalYDPI | 屏幕逻辑的垂直dpi | 1 |  | | |
| pixelDepth | 屏幕的位深 | | 1 | 1 | 1 |
| top | 当前屏幕距上边的像素距离 |  | 1 | | |
| updateInterval | 以毫秒表示屏幕的刷新时间间隔 | 1 |  | | |
| width | 屏幕的像素宽度 | 1 | 1 | 1 | 1 |
