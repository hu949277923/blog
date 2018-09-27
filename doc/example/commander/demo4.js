#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
program
  .version('0.0.1')
  .arguments('<test> <test2> <test3>')
  .action(function (cmd, env, test) {
     cmdValue = cmd;
     envValue = env;
     console.log(test)
  });

program.parse(process.argv);

if (typeof cmdValue === 'undefined') {
   console.error('no command given!');
   process.exit(1);
}
console.log('command:', cmdValue);
console.log('environment:', envValue || "no environment given");