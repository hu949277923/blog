
/**
 * 类的访问修饰符
 * private 私有属性 只能在类内部访问
 * public 公有属性
 * protected 受保护的属性 可以在类内部访问，同时可以在子类中访问
 */
export {}
// 类的属性在使用之前必须在类型中声明，为了给属性做类型标注
class Person {
  public name: string // =  'init name'// 声明属性 可赋值初始值
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
// Property 'age' is private and only accessible within class 'Person'.ts(2341)

// console.log(tom.age)

// Property 'gender' is protected and only accessible within class 'Person' and its subclasses.ts(2445)

// console.log(tom.gender)

class Student extends Person {
  constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender) // 子类可访问父类受保护的成员
    // Property 'age' is private and only accessible within class 'Person'.ts(2341)
    // console.log(this.age) // 子类无法访问父类私有成员
  }
 }
 // 构造函数的访问修饰符默认 public， 我们可以设置构造函数为private,只允许内部访问，如果想外部访问，我们可以定义一个静态方法，再去调用
 class Student2 extends Person {
  private constructor (name: string, age: number) {
    super(name, age)
    console.log(this.gender) // 子类可访问父类受保护的成员
    // Property 'age' is private and only accessible within class 'Person'.ts(2341)
    // console.log(this.age) // 子类无法访问父类私有成员
  }
  static create(name: string, age: number) {
    return new Student2(name, age)
  }
 }