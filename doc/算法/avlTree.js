
import { BinarySearchTree } from './binarySearchTree.js'
import { defaultCompareFn, Compare } from './utils.js'
import { Node } from './node2.js'
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

// 平衡树
export class AvlTree extends BinarySearchTree {
  constructor(compareFn = defaultCompareFn) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }
  // 获取 node节点深度
  getNodeHeight(node) {
    if (node == null) return -1
    let max = Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))
    max++
    return max
  }
  //计算平衡因子，左右差值？？
  getBalanceFactor(node) {
    const diff = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
    switch(diff) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }
  /**
   *      3                 2
   *    2         ->      1    3
   *  1
   * @param { Node } node 
   * @return { Node } node
   */
  rotateLL(node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }
  /**
   *    1                 2
   *      2       ->    1    3
   *        3
   * @param { Node } node 
   * @return { Node } node
   */
  rotateRR(node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }
    /**
   *      3       RR      3       LL        2
   *   1         --->    2        --->    1   3 
   *     2              1
   * @param { Node } node 
   * @return { Node } node
   */
  rotateRL(node) {
    node.left = this.rotateRR(node.left)
    return this.rotateLL(node)
  }
    /**
   * 2       LL      3        RR       2
   *    3   --->       2     --->    1   3 
   *  1                  1
   * @param { Node } node 
   * @return { Node } node
   */
  rotateLR(node) {
    node.right = this.rotateLL(node.right)
    return this.rotateRR(node)
  }
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }
  insertNode(node, key) {
    // debugger
    if (node == null) {
      return new Node(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // duplicated key
    }
    const balanceFactor = this.getBalanceFactor(node)
    console.log(balanceFactor)
    if (balanceFactor == BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) == Compare.LESS_THAN) {
        node = this.rotateLL(node)
      } else {
        node = this.rotateRL(node)
      }
    }
    if (balanceFactor == BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) == Compare.BIGGER_THAN) {
        node = this.rotateRR(node)
      } else {
        node = this.rotateLR(node)
      }
    }
    return node
  }
  remove(key) {
    this.removeNode(this.root, key)
  }
  // 删除node 节点以及红黑书问题不明白具体实现？？？
  
  removeNode(node, key) {
    console.log(1)
    node = super.removeNode(node, key)
    if (node == null) return node
    // console.log(super.removeNode(node, key))
    // if (node == null) return node
    const balanceFactor = this.getBalanceFactor(node)
    console.log(balanceFactor)
    return node
  }
}