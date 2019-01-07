function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
initMixin(Vue)
function initMixin(Vue) {
  Vue.prototype._init = function() {
    resolveConstructorOptions(Vue.constructor)
  }
}

function resolveConstructorOptions(Ctor) {
  let options = Ctor.options
  Ctor.super
  console.log('--options--%s', options)
  console.log('--Ctor.super--%s', Ctor.super)
}

new Vue({
  el: '#app',
  template: '<App/>'
})
function(val) {
  return map[]
}