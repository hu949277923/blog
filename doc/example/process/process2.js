const fs = require('fs')
const path = require('path')
fs.createReadStream(path.join(__dirname, 'test.txt')).pipe(process.stdout)
