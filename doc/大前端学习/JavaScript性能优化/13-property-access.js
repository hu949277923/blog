// 定义了成员的访问函数
console.time('Person')
function Person() {
  this.name = 'bill'
  this.age = 18
  this.getAge = function () {
    return this.age
  }
}
const p1 = new Person()
const a = p1.getAge()
console.timeEnd('Person') // Person: 0.232ms
// 属性访问
console.time('Person2')
function Person2() {
  this.name = 'bill'
  this.age = 18
}
const p2 = new Person2()
const b = p2.age
console.timeEnd('Person2') // Person2: 0.066ms

// 定义了成员的访问函数
console.time('Person3')
function Person3() {
  this.name = 'bill'
  this.age = 18
}
Person3.prototype.getAge = function () {
  return this.age
}
const p3 = new Person3()
const c = p3.getAge()
console.timeEnd('Person3') // Person3: 0.050ms