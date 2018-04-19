#【ES6第15期】字符串扩展-includes(), startsWith(), endsWith(),repeat(),padStart()，padEnd()

## includes()


返回布尔值，表示是否找到了参数字符串。

```
let s = 'Hello world!';
s.includes('H'); // true
```
```
let s = 'Hello world!';
s.includes('H', 6); // false  从索引为6的位置开始查找
```
## startsWith()

返回布尔值，表示参数字符串是否在原字符串的头部。

```
let s = 'Hello world!';
s.startsWith('H'); // true
```
```
let s = 'Hello world!';
s.startsWith('H', 6); // false  从索引为6的位置开始查找，如果索引为6的值是H则返回true,否则返回 false
```

## endsWith()

返回布尔值，表示参数字符串是否在原字符串的尾部。
```
let s = 'Hello world!';
s.endsWith('!'); // true
```
```
let s = 'Hello world!';
s.endsWith('!', 6); // false  从索引为6的位置开始查找，如果索引为6的值是H则返回true,否则返回 false
```

**注意**include()、startsWith()、endsWith() 第二个参数如果返回是负数，则从0开始查找

## repeat()

返回一个新字符串，表示将原字符串重复n次。

```
let s = 'hello';
s.repeat(2); // hellohello
```
参数为小数,则会取整处理

```
let s1 = 'hello';
s1.repeat(2.1) // hellohello
```
参数是负数或者Infinity，会报错(Invalid count value)。

```
 let s1 = 'hello';
 s1.repeat(-1) // VM719:3 Uncaught RangeError: Invalid count value
```
如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
```
 let s1 = 'hello';
 s1.repeat(0.9) // ""
```
参数NaN等同于 0。
```
 let s1 = 'hello';
 s1.repeat(NaN) // ""
```
如果repeat的参数是字符串，则会先转换成数字。
```
 let s1 = 'hello';
 s1.repeat("2") // "hellohello"
 let s2 = 'hello';
 s2.repeat("2a") // ""
```
如果repeat的参数是布尔，则会先转换成数字。
```
 let s1 = 'hello';
 s1.repeat(true) // "hello" 隐式转换为 1
 let s2 = 'hello';
 s2.repeat(false)// "" 隐式转换为 0
```
如果repeat的参数是数组，则会先转换成数字。
```
 let s1 = 'hello';
 s1.repeat([]) // "" 
 let s2 = 'hello';
 s2.repeat(["1"]) // "hello" 
 let s3 = 'hello';
 s3.repeat(["1", "1"]) // "" 
```
## padStart()

用于头部补全, 如果第一个参数是字符串、布尔或数组等类型，会首先进行隐式转换后再计算

```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
```
如果省略第二个参数，默认使用空格补全长度。
```
'x'.padStart(4) // '   x'
```
## padEnd()

用于尾部补全，如果第一个参数是字符串、布尔或数组等类型，会首先进行隐式转换后再计算

```
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
```
如果省略第二个参数，默认使用空格补全长度。
```
'x'.padEnd(4) // 'x   '
```
