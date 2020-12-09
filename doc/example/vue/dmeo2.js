function render() {
  with(this) {
    return _c(hello)
  }
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return [target][sourceKey]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  // Object.defineProperty(target, key, sharedPropertyDefinition);
}
const proxy = new Proxy(vm, proxy);

render.call(proxy);