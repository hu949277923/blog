# 【JS第12期】JavaScript String 通过 new创建和直接赋值字符串的区别

方法一：var a = "aaa";
方法二：var b = new String('aaa');

- 两种方式都能创建字符串对象，但方式一要比方式二更优。
- 字符串是保存在栈中的，而通过new创建的对象会存放在堆内存中。
