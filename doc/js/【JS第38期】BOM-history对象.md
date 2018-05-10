# 【JS第38期】BOM-history对象

history对象保存着用户上网的历史纪录

- go()方法可以在用户的历史记录中任意跳转，可以向后或向前。

- back()方法是后退一页
- forward()方法是前进一页

- length 保存着历史记录的数量

当页面url改变时，就会生成一条历史记录。在ie8及更高版本、opera、firefox、safari3及更高版本以及chrome，这里所说的改变包括url中的hash的变化。