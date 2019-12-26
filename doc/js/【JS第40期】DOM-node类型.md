#  

js中所有节点类型都继承自node类型，因此所有节点类型都共享相同的基本属性和方法。

每个节点都有一个nodeType属性，用于表明节点的类型，下面列车表示node类型的12个常量：
- Node.ELEMENT_NODE(1)
- Node.ATTRIBUTE_NODE(2)
- Node.TEXT_NODE(3)
- Node.CDATA_SECTION_NODE(4)
- Node.ENTITY_REFERENCE_NODE(5)
- Node.ENTITY_NODE(6)
- Node.PROCESSING_INSTRUCTION_NODE(7)
- Node.COMMENT_NODE(8)
- Node.DOCUMENT_NODE(9)
- Node.DOCUMENT_TYPE_NODE(10)
- Node.DOCUMENT_FRAGMENT_NODE(11)
- Node.NOTATION_NODE(12)

## nodeName和nodeValue属性

- nodeName保存着元素的标签名
- nodeValue的值始终为null

## 节点关系

- childNodes 返回节点的所有子节点，保存着一个NodeList对象。可以通过方括号或item() 获取指定节点。如：

```
var o = document.getElementById('test');
var oLists = o.childNodes
var first = oLists[0] 
var second = oLists.item(1)
```

- parentNode 返回文档树的父节点。

- previousSibling 返回当前节点的前一个节点。如果没有，则返回null
- nextSibling 返回当前节点的后一个节点。如果没有，则返回null
- firstChild 返回子节点的第一个节点。如果没有，则返回null
- lastChild 返回子节点的最后节点。如果没有，则返回null
- hasChildNodes() 包含一个阶段或多个节点时返回true,否则返回false
- ownerDocument 该属性每个节点都存在，返回整个文档的文档节点（document）。

## 操作节点

- appendChild() 向子节点末尾添加一个节点
- insertBefore() 向指定节点之前插入节点，如果没有指定插入节点位置，则和appendChild()一致
- repeaceChild() 替换指定节点
- removeChild() 删除指定节点

## 其他方法

- cloneNode() 创建掉用这个方法的节点的一个完全相同的副本。参数传入true表示深拷贝，也就是复制节点及整个子节点树；false浅拷贝，只复制节点本身

**注意**cloneNode()方法不会复制添加到dom节点中的js属性，例如事件处理程序等。这个方法只复制特性、子节点，其他一切都不会复制。ie有个bug，即它会复制事件处理程序，所以我们建议在复制之前先移除事件处理程序。

- normalize() 用于处理文档树中的文本节点

