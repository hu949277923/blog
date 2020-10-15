const DublyNode = require('./dublyNode')
const LinkedList = require('./LinkedList')
class DublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = undefined
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DublyNode(element)
      let curr = this.head
      // console.log('curr',curr)
      if (index === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = curr
          curr.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        curr = this.tail
        node.prev = curr
        curr.next = node
        this.tail = node
      } else {
        const prev = this.getElementAt(index - 1)
        curr = prev.next
        prev.next = node
        node.prev = prev
        node.next = curr
        curr.prev = node
      }
      this.count++
      return true
    }
    return false
  }
  removeAt(index) {
    if (index >= 0 && index <= this.count) {
      let curr = this.head
      if (index === 0) {
        this.head = this.head.next
        if (this.count === 1) {
          this.tail = undefined
        } else {
          this.head.prev = undefined
        }
      } else if (index === this.count - 1) {
        curr = this.tail
        this.tail = this.tail.prev
        this.tail.next = undefined
      } else {
        curr = this.getElementAt(index - 1)
        console.log('curr:before',curr, 'curr:after')
        let previous = curr.prev
        let next = curr.next
        previous.next = curr.next
        next.prev = previous
        console.log('curr',next,'11')
      }
      this.count--
      return curr.element
    }
    return undefined
  }
  remove(element) {
    const index = this.indexOf(element)
    console.log(index)
    return this.removeAt(index)
  }
}

const dublyLinked = new DublyLinkedList()
dublyLinked.insert(1, 0)
dublyLinked.insert(2, 0)
dublyLinked.insert(3, 0)
dublyLinked.insert(4, 0)
// console.log(dublyLinked.push(4))
dublyLinked.remove(4)
// console.log(dublyLinked.indexOf(1))
console.log(dublyLinked.toString())