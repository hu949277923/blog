// gulp 组合任务

const { series, parallel} = require('gulp')
const task1 = done => {
  setTimeout(() => {
    console.log('task1 warking...')
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2 warking...')
    done()
  }, 1000)
}

const task3 = done => {
  setTimeout(() => {
    console.log('task3 warking...')
    done()
  }, 1000)
}
// series自动按照顺序执行任务(串行任务)
exports.foo = series(task1, task2, task3)
// parallel同步执行多个任务（并行任务）
exports.bar = parallel(task1, task2, task3)