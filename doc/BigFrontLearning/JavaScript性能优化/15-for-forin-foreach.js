var arrlist = new Array(1, 2,3,4,5)

console.time('foreach')
arrlist.forEach(function(item) {
  console.log(item)
})
console.timeEnd('foreach') // foreach: 12193.07 ops/s ± 11.76% Fastest

console.time('for')
for (var i = arrlist.length; i; i--) {
  console.log(arrlist[i])
}
console.timeEnd('for') // for: 6483.63 ops/s ± 11.53%  46.83 % slower

console.time('forin')
for (var i in arrlist) {
  console.log(arrlist[i])
}
console.timeEnd('forin') // forin: 6644.05 ops/s ± 10.05%  45.51 % slower