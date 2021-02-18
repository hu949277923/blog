var name = 'zec'

function foo () {
  name = 'boo'
  function baz () {
    var age = 28
    console.log(age)
    console.log(name)
  }
  baz()
}
foo()

var name = 'zec'
// 减少作用域链查找层级
function foo () {
  var name = 'boo'
  function baz () {
    var age = 28
    console.log(age)
    console.log(name)
  }
  baz()
}
foo()