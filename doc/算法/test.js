// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

var twoSum = function(nums, target) {
  let arr = []
  for ( let i = 0; i < nums.length; i++){
      const dif = target-nums[i]; 
      console.log(arr[dif]);
      if (arr[dif] !== undefined) {
        console.log(111)
          return [arr[dif], i]
      }
      arr[nums[i]] = i
  }
};
var nums = [2,7,11,15]
twoSum(nums, 11)

function twoSum2(nums, target) {
  for ( let i = 0; i < nums.length; i++) {
    const dif = target - nums[i]
    for( let j = i + 1; j < nums.length; j++) {
      if (nums[j] === dif) {
        console.log(i, j)
        return [i,j]
      }
    }
  }
}
console.log(twoSum2(nums, 9))