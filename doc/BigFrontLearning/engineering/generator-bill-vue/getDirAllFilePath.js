const fs = require('fs')
const path = require('path')
const join = path.join
function getJsonFiles(jsonPath){
  let jsonFiles = [];
  function findJsonFile(path){
      let files = fs.readdirSync(path);
      files.forEach(function (item, index) {
          let fPath = join(path,item);
          let stat = fs.statSync(fPath);
          if(stat.isDirectory() === true) {
              findJsonFile(fPath);
          }
          if (stat.isFile() === true) { 
            jsonFiles.push(fPath);
          }
      });
  }
  findJsonFile(templates);
  // console.log(jsonFiles);
  return jsonFiles
}
const templates = path.join(__dirname, './generators/app/templates')
// console.log(templates)
// const jsonFiles = getJsonFiles(templates)
// // const arr = []
// const arr = jsonFiles.map(item => {
//   console.log(templates, item)
//   return item.replace(templates + '/', '')
// })
// console.log(arr)
module.exports = function getDirAllFilePath(jsonPath) {
  const jsonFiles = getJsonFiles(jsonPath)
  // const arr = []
  const arr = jsonFiles.map(item => {
    console.log(templates, item)
    return item.replace(templates + '/', '')
  })
  return arr
}