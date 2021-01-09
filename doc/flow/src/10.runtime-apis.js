

/**
 * 运行环境 API
 * 
 * @flow
 */

 const element: HTMLElement | null = document.getElementById('app') // 浏览器环境下的api所对应的类型限制

 // https://github.com/facebook/flow/blob/master/lib/core.js
 // https://github.com/facebook/flow/blob/master/lib/dom.js
 // https://github.com/facebook/flow/blob/master/lib/bom.js
 // https://github.com/facebook/flow/blob/master/lib/cssom.js
 // https://github.com/facebook/flow/blob/master/lib/node.js