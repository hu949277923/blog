// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 yeoman generator 的类型
// yeoman generator 在工作时会自动调用我们此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    // yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的prompt() 方法发出对用户的命令行询问
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'your project name',
        default: this.appname // appname 为项目生成目录名称
      }
    ]).then(answers => {
      // answers => { name: 'user input value'}
      this.answers = answers
    })
  }
  writing () {
    // yeoman自动生成文件阶段调用此方法
    // 我们这里尝试项目目录中写入方法
    // this.fs.write(
    //   this.destinationPath('./temp.txt'),
    //   Math.random().toString()
    // )
    
    // 通过模版方式写入文件到目标目录

    // // 模版文件路径
    // const tmpl = this.templatePath('foo.txt')
    // // 输出目标路径
    // const output = this.destinationPath('foo.txt')
    // // 模版数据上下文
    // const context = { title: 'hello bill!', success: true }
    // // const context = this.answers
    // console.log(context)
    // this.fs.copyTpl(tmpl, output, context)


     // 模版文件路径
     const tmpl = this.templatePath('bar.html')
     // 输出目标路径
     const output = this.destinationPath('bar.html')
     // 模版数据上下文
    //  const context = { title: 'hello bill!', success: true }
     const context = this.answers
     console.log(context)
     this.fs.copyTpl(tmpl, output, context)
  }
}