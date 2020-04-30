// var searchInsert = function(nums, target) {
//   let len = nums.length;
//   if (nums[0] >= target) {
//       nums.unshift(target)
//       return 0
//   }
//   if (target > nums[len - 1]) {
//       nums.push(target)
//       return len
//   }
//   for (let i = 1; i < len; i++) {
//       if (target == nums[i]) {
//         return i
//       }
//       if (target > nums[i - 1] && target < nums[i]) {
//           nums.splice(i, 0, target)
//           return i
//       }
//   }
// };
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length;
  if (len === 0 || target <= nums[0]) {
      return 0
  }
  if (target > nums[len - 1]) {
      return len
  }
  if ( target === nums[len - 1]) {
      return len - 1
  }
  let right = len - 1
  let left  = 0;
  while(left <= right) {
      let mid = Math.round((left + right) / 2)
      if (nums[mid] === target) {
          return mid;
      } else if (target < nums[mid]) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return left
};

nums = [1,3,5,6,7,8]
target = 7 

10/2 5   0 10

5 - 10 

// left 0 right 6 mid 3
// left 4 right 6 mid 5
console.log(searchInsert(nums,target))

0 10  5

5 + 10 8

0 10 - 5 5
0 5 