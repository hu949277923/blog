# 【vue源码篇】computed源码详解

```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```

在初始化computed之前，props、methods、data等已初始化完成。我们主要介绍computed，所以其他的不做介绍。上面代码中

```js
if (opts.computed) initComputed(vm, opts.computed)
```

初始化computed，判断opts.computed(我们传人的computed对象)是否存在，如果存在会进入initComputed(vm, opts.computed)方法

```js

function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  // 创建一个空对象，赋值给vm._computedWatchers与watchers
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
  // 是否为服务端渲染
  const isSSR = isServerRendering()
  // 循环遍历computed
  for (const key in computed) {
    const userDef = computed[key]
    // 判断userDef类型是否为function,true 返回 userDef； false 返回userDef.get方法
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    // getter 为null 则抛出警告
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }
    //
    if (!isSSR) {
      // create internal watcher for the computed property.
      // 为每一个watchers[key]创建一个Watcher实例对象
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    // 查找vm对象中是否存在当前key，如果存在则提示警告，否则调用defineComputed()
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm)
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
      }
    }
  }
}
```
上面代码的意思是创建一个_computedWatchers空对象，循环遍历computed，如果不是服务端渲染则在_computedWatchers添加key为当前computed[key]的Watcher实例对象。然后，查找vm对象中是否存在当前key，如果存在则提示警告，否则调用defineComputed()

```js
export function defineComputed (
  target: any,
  key: string,
  userDef: Object | Function
) {
  const shouldCache = !isServerRendering()
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        `Computed property "${key}" was assigned to but it has no setter.`,
        this
      )
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
```

defineComputed()函数还是比较容易理解的，简单说就是实现响应式，通过 Object.defineProperty设置get、set方法。如果userDef类型为函数并且不是服务端渲染，则get方法为createComputedGetter(key)的返回值，否则为传入userDef，set方法设置为noop(空函数);如果userDef类型不是函数并且不是服务端渲染没有缓存时，则get方法为createComputedGetter(key)的返回值，否则为传入userDef.get，set方法会首先判断是否有userDef.set，如果有则返回userDef.set，否则为noop。具体createComputedGetter函数实现如下：

```js
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      // ---1----
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      // ----1---
      return watcher.value
    }
  }
}
```

上面我们已经介绍了_computedWatchers中在初始化时存储了当前key指定的watcher对象的实例。这里我们会判断_computedWatchers中是否存在指定的watcher对象的实例，如果存在则返回watcher对象的value。
如上1注释，如果dirty(是否延迟)为true,则调用处理watcher.evaluate()。如果存在Dep.target，则进行依赖收集，这样在某个值改变时，可以通过update方法，更新所有watcher对象。

以上为自己理解，如有错误欢迎大家指导！！！！！