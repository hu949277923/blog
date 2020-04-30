/**
 * @param {string} s
 * @return {number}
 */
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/roman-to-integer
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var romanToInt = function(s) {
 let map = {
   'I': 1,
   'V': 5,
   'X': 10,
   'L': 50,
   'C': 100,
   'D': 500,
   'M': 1000
 }
 let sum = 0;
 let prev
 let next
 //i i v i i
 // 
 for(let i = 0; i < s.length; i++) {
   prev = s.charAt(i)
   next = s.charAt(i + 1)
   if (next && (map[prev] < map[next])) {
     sum += map[next] - map[prev]
     i++
   } else {
     sum += map[prev]
   }
 }
 return sum
};

var s = "MCMXCIV"
console.log(romanToInt(s))