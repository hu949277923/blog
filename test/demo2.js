function foo(strings, ...values) {
  console.log(strings)
  console.log(values)
}
var desc = 'word'
var i = 'yim'
foo `hello ${desc} from ${i} d`
