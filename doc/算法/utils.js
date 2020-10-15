export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}
export function defaultCompareFn(a, b) {
  if (a === b) return Compare.EQUALS
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export function swap(arr, a, b){
   [arr[a], arr[b]] = [arr[b], arr[a]]

}