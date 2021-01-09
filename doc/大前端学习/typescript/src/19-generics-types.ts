
/**
 * 泛型
 * 在定义函数或方法的时候没有定义类型，等我们在使用的时候再去指定具体类型
 * 为了极大程度复用代码
 * 
 * */
export {}

function createNumArray (lenght: number, value: number): number[] {
  const arr = Array<number>(lenght).fill(value)
  return arr
}
function createStringArray (lenght: number, value: string): string[] {
  const arr = Array<string>(lenght).fill(value)
  return arr
}
const res = createNumArray(3, 100)
// res => [100, 100, 100]

const res2 = createStringArray(3, 'string')
// res => ['string', 'string', 'string']

// 以上重复定义方法，我们完全可以通过泛型实现只定义一个函数即可
function createArray<T> (lenght: number, value: T): T[] {
  const arr = Array<T>(lenght).fill(value)
  return arr
}

const res3 = createArray<string>(3, 'string')
