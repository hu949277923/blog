/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   if (s.length <= 0) return true
//   const map = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   }
//   let arr = []
//   for(let i = 0; i < s.length; i++) {
//     if (arr.length <= 0 || (arr[arr.length - 1] && map[arr[arr.length - 1]] !== s[i])) {
//       arr.push(s[i])
//     } else {
//       arr.pop()
//     }
//   }
//   if (arr.length === 0) return true
//   else return false
// };
// var isValid = function(s) {
//   while(s.length) {
//     let temp = s;
//     s = s.replace('()', '')
//     s = s.replace('[]', '')
//     s = s.replace('{}', '')
//     if (temp === s) {
//       return false
//     }
//   }
//   return true
// };
var isValid = function(s) {
  if (s.length <= 0) return true
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let arr = []
  for(let i in s) {
    const v = s[i]
    if (['(','{','['].indexOf(v) > -1) {
      arr.push(s[i])
    } else {
      const p = arr.pop()
      if (map[p] !== v) {
        return false
      }
    }
  }
  if (arr.length === 0) return true
  else return false
};
var s = "{([{}])}" // true
// var s = "(]" // false
// var s = "([)]" // false
// var s = "" // true
// var s = "[])[" //false
console.log(isValid(s))