
/**
 * 类 { class }
 * 描述一类具体事物的抽象特征
 * 用来描述一类具体对象的抽象成员
 * typescript 增强类class的相关语法
 * 
 */
export {}
// 类的属性在使用之前必须在类型中声明，为了给属性做类型标注
class Person {
  name: string // =  'init name'// 声明属性 可赋值初始值
  age: number
  constructor (name: string, age: number) {
    // Property 'name' does not exist on type 'Person'.ts(2339)
    // typescript 明确声明拥有的属性
    this.name = name
    this.age = age
  }
  say (msg: string): void {
    console.log(msg)
  }
}