
/**
 * 抽象类
 * 只能继承，不能通过new 关键字创建实例对象
 */
export {}
// 抽象类
abstract class Animal {
  eat (food: string): void {
    console.log(`畜生吃${food}`)
  }
  // 抽象方法
  abstract run (distance:number): void
}
class Dog extends Animal {
  run (distance:number): void {
    console.log('---', distance)
  }
}
const d = new Dog()
d.eat('werwe')
d.run(100)