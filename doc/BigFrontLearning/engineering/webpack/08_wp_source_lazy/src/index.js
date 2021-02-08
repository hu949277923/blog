let obtn = document.getElementById('btn')
obtn.addEventListener('click', function() {
  import(/*webpackChunkName: "login"*/ './login.js').then((res) => {
    console.log('restult:', res)
  })
  // console.log('执行了点击事件')
})