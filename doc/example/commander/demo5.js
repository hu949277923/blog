#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
program
  .version('0.0.1')
  .command('install [name]', 'install one or more packages')
  .command('search [query]', 'search with optional query', { noHelp: true })
  .command('list', 'list packages installed', {isDefault: true})
  .parse(process.argv);

  // node demo5.js install 执行 demo5-install.js
