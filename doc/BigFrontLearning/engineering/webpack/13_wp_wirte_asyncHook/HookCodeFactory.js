class HookCodeFactory {
  setup(instance, options) {
    this.options = options
    instance._x = options.taps.map(o => o.fn)
  }
  args({ before, after } = {}) {
    let allArgs = this.options.args
    if (before) allArgs = [before].concat(allArgs)
    if (after) allArgs = allArgs.concat(after)
    return allArgs.join(',') // ["name", "age"]===> name, age
  }
  head() {
    return `"use strict";var _context;var _x = this._x;`
  }
  content() {
    let code = `do {
      var _counter = ${this.options.taps.length};
      var _done = (function() {
        _callback();
      });`
    // for (let i = 0; i < this.options.taps.length; i++) {
    //   code += `var _fn${i} = _x[${i}]; _fn${i}(${this.args()});`
    // }
    for (let i = 0; i < this.options.taps.length; i++) {
      code += `
        if(_counter <= 0) break;
        var _fn${i} = _x[${i}];
        _fn${i}(name, age, (function(_err${i}) {
        if(_err${i}) {
          if(_counter > 0) {
            _callback(_err${i});
            _counter = 0;
          }
        } else {
          if(--_counter === 0) _done();
          }
        }));
      `
    }
    code += ` } while(false);
        })`
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