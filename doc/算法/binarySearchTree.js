import { defaultCompareFn, Compare } from './utils.js'
import { Node } from './node2.js'
// 二叉树
// 
export class BinarySearchTree {
  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn
    this.root = null
  }
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else if (node.right == null) {
      node.right = new Node(key)
    } else {
      this.insertNode(node.right, key)
    }
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node == null) return false
    if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    }
    if (this.compareFn(key, node.key) == Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    }
    return true
  }
  min() {
    return this.minNode(this.root)
  }
  minNode(node) {
    let curr = node
    while(curr !== null && curr.left !== null) {
      curr = curr.left
    }
    return curr
  }
  max() {
    return this.maxNode(this.root)
  }
  maxNode(node) {
    let curr = node
    while(curr !== null && curr.right !== null) {
      curr = curr.right
    }
    return curr
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }
  /**
   * 中序遍历
   * @param { Node } node 
   * @param { Function } callback 
   */
  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }
  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }
  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key)
  }
  removeNode(node, key) {
    console.log(2)
    if (this.compareFn(key, node.key) == Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) == Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left == null && node.right == null) {
        node= null
        return node
      }
      if (node.left == null) {
        node = node.right
        return node
      } else if (node.right == null) {
        node = node.left
        return node
      }
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}