/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  
  if (root == null) {
      return true;
  }
  //左中右顺序递归二叉树
  var nums = [];
  search(nums, root, 1);
  //判断是否对称
  var i = 0, j = nums.length - 1;
  while (i < j) {
      if (nums[i] != nums[j]) {
          return false;
      }
      i++;
      j--;
  }
  return true;
};
/**
* 按照左中右顺序递归二叉树，输出至数组nums中
* @param nums      输出
* @param n         节点
* @param k         层次
*/
function search(nums, n, k) {
  //左边
  if (n.left != null) {
      search(nums, n.left, k + 1);
  }
  //节点值，层次
  nums.push(n.val + ',' + k);
  //右边
  if (n.right != null) {
      search(nums, n.right, k + 1);
  }
}


const arr =  [1,2,2,3,4,4,3]

console.log(isSymmetric(arr))