var test = () => {
  var arr = [2, 4, 5, 7, 9]
  var i
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
test()

// 减少循环体活动
var test = () => {
  var arr = [2, 4, 5, 7, 9]
  var i
  var len = arr.length
  for (i = 0; i < len; i++) {
    console.log(arr[i])
  }
}
test()

// while

var test = () => {
  var arr = [2, 4, 5, 7, 9]
  var len = arr.length
  while (len--) {
    console.log(arr[len])
  }
}
test()