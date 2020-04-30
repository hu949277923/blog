// var removeElement = function(nums, val) {
//   let len = nums.length;
//   let index = 0;
//   for(let i = 0; i < len; i++){
//     console.log('nums[i],val, index',nums[i],val, index )
//       if (nums[i] !== val) {
//           nums[index] = nums[i]
//           index++
//       }
//   }
//   return index
// };
var removeElement = function(nums, val) {
  let len = nums.length;
  for(let i = 0; i < len;) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    } else {
      i++
    }
  }
  return len
};
var nums = [3,2,2,3]
var val = 2

removeElement(nums, val)
console.log(nums)