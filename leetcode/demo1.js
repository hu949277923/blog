// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
var nums = [2, 7, 11, 15]
var target = 26
// O(N^2)
function twoSum(nums, target) {
  for ( let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
// console.log(twoSum(nums, target))
// [2, 7, 11, 15]
// [2, 7, 11, 15]
// O(N)
function twoSum2(nums, target) {
  const map = []
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map[diff]!==undefined) {
      return [map[diff], i]
    }
    map[nums[i]] = i
    console.log('map',map)
  }
}
console.log(twoSum2(nums, target))
