
/**
 * 类与接口
 * 当类成员一样的情况我们可以抽象出一个接口
 */
export {}
interface EatAndRun {
  eat (food: string): void
  run (distance:number): void
}
// 可单独定义接口
interface Eat {
  eat (food: string): void
}
interface Run {
  run (distance:number): void
}
class Person implements EatAndRun {
  eat (food: string): void {
    console.log(`人吃${food}`)
  }
  run (distance:number): void {
    console.log(`徒步${distance}`)
  }
}
class Animal implements Eat, Run {
  eat (food: string): void {
    console.log(`畜生吃${food}`)
  }
  run (distance:number): void {
    console.log(`狂奔${distance}`)
  }
}