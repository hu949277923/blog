
# 【JS第14期】RegExp 详解

## 定义正则表达式的方式

### 以字面量的形式定义正则表达式

ECMAScript 通过 RegExp 类型来支持正则表达式。语法如下：
```
var expression = / pattern / flags;
```
**pattern** 可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向应用

**flags** 标明正则表达式的行为。正则表达式的匹配模式支持下列3哥标标志：
- `g:` 表示全局模式，即模式将应用于所有字符串
- `i:` 表示不区分大小写模式
- `m:` 表示多行模式，即在到达一行文末后继续查找下一行是否存在与模式匹配的项

模式中使用的所有**元字符**都必须转义。正则表达式的元字符包括：`( [ { } ] ) \ ^ $ | ? * + .`等

### 以RegExp构造函数的形式定义正则表达式

RegExp构造函数接收两个参数：一个是要匹配的字符串模式，另一个是可选的标志字符串。如：
```
// 匹配第一个bat 或 cat 不区分大小写
var reg = new RegExp('[bc]at', 'i')
```
由于RegExp构造函数的模式参数是字符串，所以在一些情况下要对字符串进行双重转义，所有的**元字符**必须双重转义，那些转义过的字符也是如此，例如`\n`在对象字面量中通常转义为`\\n`,而在正则表达式字符串中变成`\\\\n`。

## 两种表达式的区别

在ECMAScript 3中，正则表达式字面量始终会共享同一个RegExp 实例， 而使用构造函数创建的每一个新的RegExp 实例都是一个新的实例。
```
var re = null, i;
for (i = 0; i < 10; i++) {
  re = /cat/g;
  console.log(re.test('catastrophe'));
}
for (i = 0; i< 10; i++) {
  re = new RegExp('cat', 'g');
  console.log(re.test('catastrophe'))
}
```
在第一个循环中，实际上只为/cat/创建了一个RegExp实例。由于实例属性不会被重置，所以在下次循环调用test()方法时会失败。这是因为第一次调用test()找到了'cat',第二次调用是从索引为3的自负开始，所以就找不到。由于会测试到字符串结尾所以在下次调用是又从开头开始了。

在第二个循环中，由于每次循环重新创建了RegExp实例，所以每次调用都会返回true

ECMAScript 5 规定，使用字面量创建时，要与使用RegExp构造函数时一样，每次都创建一个实例

## RegExp 实例属性

- `global`: 布尔值，表示是否设置了`g`标志
- `ignoreCase`: 布尔值，表示是否设置了`i`标志
- `lastIndex`: 整数，表示开始搜索下一个匹配项的字符串位置，从0开始
- `multiline`:布尔值，表示是否设置了`m`标志
- `source`: 返回按**字面量**表示法表示的模式字符串

## RegExp 实例方法

### exec()
exec() 方法用于检索字符串中的正则表达式的匹配。
**语法**
RegExpObject.exec(string)
**参数**
| 参数 | 描述 | 
|-----|-----|
| string | 	必需。要检索的字符串 |

```
var text = 'mom and dad and baby';
var reg = /mom( and dad (and baby)?)?/gi;
console.log(reg.exec(text))
//[
//  0: "mom and dad and baby",
//  1: " and dad and baby",
//  2: "and baby",
//  groups: undefined,
//  index: 0,
//  input: "mom and dad and baby",
//  length: 3
//]
```
**返回值**

如果匹配成功，exec() 方法返回一个数组，并更新正则表达式对象的属性。返回的数组将完全匹配成功的文本作为第一项，将正则括号里匹配成功的作为数组填充到后面。

| 返回值（数组） | 描述 | 
|-----|-----|
| [0] | 	匹配的全部字符串 |
| [1], ...[n ] | 	括号中的分组捕获 |
| index | 匹配到的字符位于原始字符串的基于0的索引值 |
| input | 原始字符串 |

ES2018 引入了[具名组匹配](https://github.com/tc39/proposal-regexp-named-groups)（Named Capture Groups），允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。
```
const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31
```
上面代码中，“具名组匹配”在圆括号内部，模式的头部添加“问号 + 尖括号 + 组名”（?<year>），然后就可以在exec方法返回结果的groups属性上引用该组名。同时，数字序号（matchObj[1]）依然有效。


如果匹配失败，exec() 方法返回 null

### test()
test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
**语法**
RegExpObject.test(string)
**参数**
| 参数 | 描述 | 
|-----|-----|
| string | 用来与正则表达式匹配的字符串 |

```
let str = 'hello world!';
let result = /^hello/.test(str);
console.log(result); 
// true
```
**返回值**

如果正则表达式与指定的字符串匹配 ，返回true；否则false。

### toString() 和 toLocaleString()

toString() 和 toLocaleString() 方法返回的时字面量形式的正则字符串表达式

## RegExp 构造函数属性

RegExp 构造函数包含一些属性（这些属性在其他语音中被看成是静态属性）。这些属性由两种方式访问，一种时长属性，一种是短属性。如下表：
| 长属性名 | 短属性名 | 描述 | 
|-----|-----|-----|
| input | $_ | 最近一次要匹配的字符串。opera 未实现此属性 |
| lastMatch | $& | 最近一次匹配项。opera 未实现此属性 |
| lastParen | $+ | 最近一次要匹配的捕获组。opera 未实现此属性 |
| leftContext | $` | input字符串中lastMatch之前的文本 |
| mutiline | $* | 布尔值，表示是否所有表达式都使用多行模式。IE和opera 未实现此属性 |
| rightContext | $' | input字符串中lastMatch之后的文本 |

```
var txt = 'this has been a short summer';
var reg = /(.)hort/g;
if (reg.test(txt)) {
  console.log(RegExp.$_); // this has been a short summer
  console.log(RegExp['$`']); // this has been a 
  console.log(RegExp["$'"]); //  summer
  console.log(RegExp['$&']); // short
  console.log(RegExp['$+']); // s
  console.log(RegExp["$*"]); // false   safari false || chrome undefined
}
```

除了上面几个属性还有9个用于捕获组的构造函数属性。RegExp.$1... RegExp.$9,分别用于存储第一、第二...等匹配捕获组
## 模式的局限性

ECMAScript 中正则表达式缺少某些语言（如：perl）支持的高级特性。下面列出一些不支持的特性。（了解更多访问www.regular-expressions.info）

- 匹配字符串开头和结尾的\A和\Z锚
- 向后查找
- 并集和交集类
- 原子组
- Unicode 支持（单个字符串除外，如：\uFFFF）
- 命名的捕获组
- s（single，单行） 和 x（free-spacing,无间隔） 匹配模式
- 条件匹配
- 正则表达式注释

