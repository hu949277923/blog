class HookCodeFactory {
  setup(instance, options) {
    this.options = options
    instance._x = options.taps.map(o => o.fn)
  }
  args() {
    return this.options.args.join(',') // ["name", "age"]===> name, age
  }
  head() {
    return `var _x = this._x;`
  }
  content() {
    let code = ``
    for (let i = 0; i < this.options.taps.length; i++) {
      code += `var _fn${i} = _x[${i}]; _fn${i}(${this.args()});`
    }
    return code
  }
  create() {
    // fn = new Function("name, age", "var _x = this._x, var _fn0 = _x[0]; _fn0(name, age);")
    let fn = new Function(
      this.args(),
      this.head() + this.content()
    )
    return fn
  }
}
module.exports = HookCodeFactory