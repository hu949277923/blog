function formatDecimals(val, key, digits = 2) {
  console.log('formatDecimals:val', val, key)
  if (Number.isNaN(+val)) {
    return false
  }
  let reg1 = /(([0-9]*)(\.{0,1})(\d{0,2}))/
  let zero = ''
  if (digits === 3) {
    reg1 = /(([0-9]*)(\.{0,1})(\d{0,3}))/
    zero = '0'
  }
  const reg2 = /^[0-9]+$/ // 正整数
  const reg3 = /^[0-9]+\.$/ // 0.
  const reg4 = /^[0-9]+\.\d{1}$/ // 0.0
  const reg5 = /^\.\d{1}$/ // .0
  const reg6 = /^\.\d{2}$/ // .00
  const reg7 = /^\.\d{3}$/ // .000
  const arr = reg1.exec(val)
  let value = ''
  if (val && arr) {
    console.log('asdsdasd',arr)
    let result = arr[0]
    if (reg2.test(result)) {
      console.log(2)
      value = `${result}.00${zero}`
    } else if (reg3.test(result)) {
      console.log(3)
      value = `${result}00${zero}`
    } else if (reg4.test(result)) {
      console.log(4)
      value = `${result}0${zero}`
    } else if (reg5.test(result)) {
      console.log(5)
      value = `0${result}0${zero}`
    } else if (reg6.test(result)) {
      console.log(6)
      value = `0${result}${zero}`
    } else if ((digits === 3) && reg7.test(result)){
      console.log(7)
      value = `0${result}`
    } else {
      value = result
    }
  }
  return Number(val).toFixed(digits) 
}