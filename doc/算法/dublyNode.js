const Node = require('./node')
// 定义node节点
module.exports = class DublyNode extends Node {
  constructor(element, prev, next) {
    super(element, next)
    this.prev = prev
  }
}