/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n - 1
  while(len1 >= 0 && len2 >= 0) {
    console.log( nums1[len1] , nums2[len2])
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
  }
  console.log(len1, len2, nums2.slice(0, len2 + 1))
  nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1))
};

const nums1 = [6, 8,9]
const m = 3
const nums2 = [0,4, 5, 6,7]
const n = 5

merge(nums1, m, nums2, n)
console.log(nums1, nums2)

