var removeDuplicates = function(nums) {
  var count = 0
  var len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[i - count] = num[i]
    } else {
      count++
    }
  }
  return len - count
};
// 1[1, 0 ,0, 1, 2, 2, 2, 3]
// 2[1, 0, 0, 1, 2, 2, 2, 3] // 1
// 3[1, 0, 0, 1, 2, 2, 2, 3]
// 4[1, 0, 1, 1, 2, 2, 2, 3]
var nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ]
// 1 [0,0,1,1,1,2,2,3,3,4] // 1
// 2 [0,1,1,1,1,2,2,3,3,4] // 1
// 3 [0,1,1,1,1,2,2,3,3,4] // 2
// 4 [0,1,1,1,1,2,2,3,3,4] // 3
// 5 [0,1,2,1,1,2,2,3,3,4] // 3
// 6 [0,1,2,1,1,2,2,3,3,4] // 4
// 7 [0,1,2,3,1,2,2,3,3,4] // 4
// 8 [0,1,2,3,1,2,2,3,3,4] // 5
// 9 [0,1,2,3,4,2,2,3,3,4] // 5
removeDuplicates(nums)
console.log('result',nums.sort())
var removeDuplicates2 = function(nums) {
  var count = 0
  var len = nums.length
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      count++
      nums[count] = num[i]
    } 
  }
  return len - count
};