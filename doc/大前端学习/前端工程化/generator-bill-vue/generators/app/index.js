const Generator = require('yeoman-generator')
const fs = require('fs')
const path = require('path')

const getDirAllFilePath = require('../../getDirAllFilePath')
module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing () {
    // 获取templates 下的所有目录文件路径
    const templates = path.join(__dirname, './templates')
    // 模版文件路径
    const arr = getDirAllFilePath(templates)
    // 输出文件路径
    console.log(arr)
    // const output = 
    // 输出目标路径
    arr.forEach(item => {
      const temp = this.templatePath(item)
      const output = this.destinationPath(item)
      const context = this.answers
      console.log(context, item)
      this.fs.copyTpl(temp, output, context)
    })
  }
}