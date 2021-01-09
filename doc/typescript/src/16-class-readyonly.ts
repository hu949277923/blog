
/**
 * 类的只读属性
 * 
 */
export {}
// 类的属性在使用之前必须在类型中声明，为了给属性做类型标注
class Person {
  public readonly name: string // =  'init name'// 声明属性 可赋值初始值
  private age: number
  protected gender: boolean
  constructor (name: string, age: number) {
    // Property 'name' does not exist on type 'Person'.ts(2339)
    // typescript 明确声明拥有的属性
    this.name = name
    this.age = age
    this.gender = true
  }
  say (msg: string): void {
    console.log(msg)
  }
}
const tom = new Person('tom', 18)
console.log(tom.name)
// Cannot assign to 'name' because it is a read-only property.ts(2540)
// tom.name = 'bill' // 无法修改