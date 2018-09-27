#!/usr/bin/env node
var program = require('commander');
var colors = require('colors');
function make_red(txt) {
  console.log(txt)
  return colors.yellow(txt); // 在控制台上显示红色的帮助文本
}
program
  .version('0.0.1')
  .command('getstream [url]', 'get stream URL')
  .parse(process.argv);
  if (!process.argv.slice(2).length) {
    program.outputHelp(function(v) {
      console.log(v)
    });
  }
console.log(colors.red('hello'))
