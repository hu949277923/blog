## TypeError: log.gauge.isEnabled is not a function 错误

## q：
```
$ nrm
/Users/bill/.config/yarn/global/node_modules/npm/node_modules/npmlog/log.js:57
log.progressEnabled = log.gauge.isEnabled()
                                ^

TypeError: log.gauge.isEnabled is not a function
    at Object.<anonymous> (/Users/bill/.config/yarn/global/node_modules/npm/node_modules/npmlog/log.js:57:33)
    at Module._compile (module.js:577:32)
    at Object.Module._extensions..js (module.js:586:10)
    at Module.load (module.js:494:32)
    at tryModuleLoad (module.js:453:12)
    at Function.Module._load (module.js:445:3)
    at Module.require (module.js:504:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/bill/.config/yarn/global/node_modules/npm/lib/utils/umask.js:2:14)
    at Module._compile (module.js:577:32)

```

## s:

```
$ rm -rf /Users/bill/.config/yarn/global/node_modules/npm/
$ yarn global upgrade
yarn global v1.6.0
[1/4] 🔍  Resolving packages...
warning nrm > node-echo > coffee-script@1.7.1: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
warning nrm > node-echo > jistype > coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
warning nrm > npm > request > node-uuid@1.4.8: Use uuid module instead
[2/4] 🚚  Fetching packages...
error @vue/cli@3.0.0-rc.3: The engine "node" is incompatible with this module. Expected version ">=8".
error Found incompatible module
info Visit https://yarnpkg.com/en/docs/cli/global for documentation about this command.

```

提示node版本过低，切换>=8,执行 yarn global upgrade

```
$ nvm use v8.9.4
$ yarn global upgrade
```