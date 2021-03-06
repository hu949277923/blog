const chalk = require('chalk')
console.error(
  `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(`invalid commit message format.`)}\n\n` +
  chalk.red(`  Proper commit message format is required for automated changelog generation. Examples:\n\n`) +
  `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
  `    ${chalk.green(`fix(v-model): handle events on blur (close #28)`)}\n\n` +
  chalk.red(`  See .github/COMMIT_CONVENTION.md for more details.\n`) +
  chalk.red(`  You can also use ${chalk.cyan(`npm run commit`)} to interactively generate a commit message.\n`)
)