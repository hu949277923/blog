function identity(arg: number): number {
  console.log(arg);
  return arg;
}

identity(1234)

function identity2<T>(arg: T):T {
  return arg
}
identity2('213')
identity2('string')
identity2(3423)
identity2({name: 'hello world'})
identity2([1,2,3])

function identity3<T>(arg:T[]):T[] {
  console.log(arg.length)
  return arg
}
identity3([])

// 泛类型 数组
function identity4<T>(arg:Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}
let myIdentity: <T>(arg: T) => T = identity2
console.log(myIdentity)
interface GenericIdentityFn {
  <T>(arg: T):T
}
let myIdentity2: GenericIdentityFn = identity2
console.log(myIdentity2)

interface GenericIdentityFn2<T> {
  (arg: T): T
}
let myIdentity3: GenericIdentityFn2<number> = identity
console.log(myIdentity3)
let myIdentity4 :GenericIdentityFn2<boolean> = identity
console.log(myIdentity4)