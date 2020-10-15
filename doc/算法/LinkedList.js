
// 定义 链表类
const Node = require('./node.js')
class LinkedList {
  constructor() {
    this.count = 0
    this.head = undefined
  }
  push(element) {
    const node = new Node(element)
    let curr
    if (!this.head) {
      this.head = node
    } else {
      curr = this.head
      while(curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
    this.count++
  }
  insert(element, index) {
    // index >=0 和小于 this.count
    // head 是否为null
    // index值如果为0，也就是插入第一个位置时；
    // 如果head为null 则 一个节点都没有，直接插入即可
    // 如果head不为null ，则至少有一个节点，这种情况需要将head替换为element，将element的next指向之前的head
    // index不为0，则需要找到位置，需要循环查找列表直到找到index - 1的位置,暂定为prevNode
    // 将 prevNode.next 指针指向 element.next
    // 将 prevNode.next 指针指向 element
    console.log(this.count)
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      console.log('---',node)
      if (index === 0) {
        console.log('---',111)
        const curr = this.head
        node.next = curr
        this.head = node
      } else {
        // 1 4 3
        const prevNode = this.getElementAt(index - 1)
        node.next = prevNode.next
        prevNode.next = node
      }
      this.count++
      return true
    }
    return false
  }
  getElementAt(index) {
    if (index <= this.count && index >= 0) {
      let count = 0
      let node = this.head
      while(count <= index) {
        console.log('---node.next--',node.next)
        if (node.next) {
          node = node.next
        }
        count++
      }
      console.log('--getElementAt--',node)
      return node
    }
    return undefined
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let curr = this.head
      if (index === 0) {
        this.head = curr.next
      } else {
        let i = 0;
        let prevNode
        while(i < index) {
          console.log('i < index',i, index)
          prevNode = curr
          curr = curr.next
          i++
        }
        prevNode.next = curr.next
      }
      this.count--
      return curr.element
    }
    return undefined
  }
  remove(element) {
    const index = this.indexOf(element)
    console.log('--index--',index)
    this.removeAt(index)
  }
  indexOf(element) {
    let index = 0
    let curr = this.head
    while( index < this.count && curr.next) {
      if (curr.element === element) {
        return index
      }
      curr =curr.next
      index++
    }
    return -1
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.count
  }
  toString() {
    let node = this.head
    // console.log(node)
    if (!node) {
      return ''
    }
    let str = `${node.element}`
    let index = 0
    while(index < this.count) {
      node = node.next
      if (node) {
        str = `${str},${node.element}`
      }
      index++
    }
    return str
  }
}
module.exports = LinkedList
const linked = new LinkedList()
console.log(linked.push(1))
console.log(linked.push(2))
console.log(linked.push(3))
console.log(linked.push(4))
console.log(linked.remove(3))
// // console.log(linked.indexOf(1))
console.log(linked.toString())
