// plpp 入口文件需要导出一个函数
// 此函数接收一个plop对象，用于创建生成器任务

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: 'myComponent'
      }
    ],
    actions: [
      {
        type: 'add', // 代表添加文件
        path: 'src/pages/{{name}}/{{name}}.css',
        templateFile: 'plop-templates/components.css.hbs'
      },
      {
        type: 'add', // 代表添加文件
        path: 'src/pages/{{name}}/{{name}}.html',
        templateFile: 'plop-templates/components.html.hbs'
      },
      {
        type: 'add', // 代表添加文件
        path: 'src/pages/{{name}}/{{name}}.js',
        templateFile: 'plop-templates/components.js.hbs'
      }
    ]
  })
}