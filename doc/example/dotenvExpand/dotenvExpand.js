var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
 
var myEnv = dotenv.config()
console.log('myEnv',myEnv)
dotenvExpand(myEnv)
