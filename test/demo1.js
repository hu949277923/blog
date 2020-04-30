function foo(str) {
  var name = 'foo'
  console.log(str)
}
function bar() {
  // var name = 'bar'
  foo(`hello from ${name}`)
}
// var name = 'global'
console.log(bar())