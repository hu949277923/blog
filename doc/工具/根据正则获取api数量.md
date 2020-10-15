```
const fs = require('fs')
const path = require('path')
// console.log('__dirname : ' + __dirname)
const baseUrl = path.resolve(__dirname, './src/api')
const data = fs.readdirSync(baseUrl)
let arr = []
if (data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    const currUrl = path.resolve(__dirname, './src/api', data[i])
    const file = fs.readFileSync(currUrl, 'utf8')
    const reg = /(target)\s*[:]\s*(('([A-Z0-9a-z-]+)')|(\"([A-Z0-9a-z-]+)\"))/g
    // const reg = /url\s*[:]\s*(('([A-Z0-9a-z-\/\?&=.]+)')|(\"([A-Za-z0-9-\/\?&=\.]+)\"))/g
    const result = file.match(reg)
    if (result) {
    arr = [...new Set(result), ...new Set(arr)]
    }
  }
}
console.log('readFileSync',arr.length)
```