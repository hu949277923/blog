// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// };
// var strStr = function(haystack, needle) {
//   var reg = RegExp(needle, 'g')
//   reg = reg.exec(haystack)
//   console.log(reg)
//   return reg === null ? -1 : reg.index
// };
var strStr = function(haystack, needle) {
  if (needle == '') return 0
  let len = haystack.length;
  let count = 0;
  let slen = needle.length;
  for (let i = 0; i < len; i++) {
    if (haystack[i] !== needle[count]) {
      i = i - count;
      count = 0;
    }  else {
      count++
    }
    if (count === slen) {
      return i - count + 1
    }
  }
  return -1
};
// haystack = "hello", needle = "ll"
// haystack = "mississippi", needle = "issip" //5 - 4 
console.log(strStr(haystack,needle))
// a b a c d
// a c
// 0 0
// 2 0
// 3 1
// 4 2