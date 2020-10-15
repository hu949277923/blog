// 二叉堆的数据结构
// 最大和最小堆
// 堆排序算法


import { defaultCompareFn, Compare, swap } from './utils.js';
export class MinHeap {
  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  getLeftIndex(index) {
    return 2 * index + 1
  }
  getRightIndex(index) {
    return 2 * index + 2
  }
  getParentIndex(index) {
    return Math.floor((index-1) / 2)
  }
  insert(value) {
    if (value) {
      const index = this.heap.length
      this.heap.push(value)
      this.siftUp(index)
    }
  }
  siftUp(index) {
    debugger
    const parent = this.getParentIndex(index)
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }
}