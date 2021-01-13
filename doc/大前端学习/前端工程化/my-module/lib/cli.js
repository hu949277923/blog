#!/usr/bin/env node
'use strict';
const meow = require('meow');
const myModule = require('./');

const cli = meow(`
Usage
  $ my-module [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ my-module
  unicorns
  $ my-module rainbows
  unicorns & rainbows
`);
