function doSomething (part, chapter) {
  const parts = ['es2016', '工程化', 'vue', 'react', 'node']
  if (part) {
    if (parts.includes(part)) {
      console.log('属于当前前端课程')
      if (chapter > 5) {
        console.log('您需要提供vip身份')
      }
    }
  } else {
    console.log('请确认模块信息')
  }
}
doSomething('es2016', 6)

// 减少判断层级
function doSomething (part, chapter) {
  const parts = ['es2016', '工程化', 'vue', 'react', 'node']
  if (!part) {
    console.log('请确认模块信息')
    return
  }
  if (!parts.includes(part)) return
  console.log('属于当前前端课程')
  if (chapter > 5) {
    console.log('您需要提供vip身份')
  }
}