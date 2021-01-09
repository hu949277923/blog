console.time('all')
var i, str = ''
for (i = 0; i < 1000; i++) {
  str += i
}
console.timeEnd('all') // all: 1.382ms

console.time('cuur')
for (let i = 0; i < 1000; i++) {
  let str = ''
  str += i
}
console.timeEnd('cuur') // cuur: 0.188ms