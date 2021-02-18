
const CALL_DELEGATE = function(...args) {
	this.call = this._createCall("sync");
	return this.call(...args);
};
class Hook {
  constructor(args = [], name = undefined) {
    this._args = args
    this.name = name
    this.taps = []
    this._x = undefined
    this.tap = this.tap
    this.call = CALL_DELEGATE
  }
  compile() {
    throw new Error("Abstract: should be overridden");
  }
  _createCall(type) {
    return this.compile({
      taps: this.taps,
			// interceptors: this.interceptors,
			args: this._args,
			type: type
    })
  }
  tap(options, fn) {
    this._tap("sync", options, fn)
  }
  
  _tap(type, options, fn) {
    if (typeof options === 'string') {
      options = {
        name: options
      }
    }
    options = Object.assign({ type, fn }, options)
    this._insert(options)
  }
  __call() {}
  _callAsync() {}
  promise() {}
  _resetCompilation() {
    this.call = this._call
    this.callAsync = this._callAsync
    this.promise = this._promise
  }
  _insert(item) {
    // this._resetCompilation()
    let i = this.taps.length;
		this.taps[i] = item;
  }
}
module.exports = Hook