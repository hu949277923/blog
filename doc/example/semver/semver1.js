const semver = require('semver')
const inquirer = require('inquirer')

const bumps = ['patch', 'minor', 'major', 'prerelease']
const curVersion = '4.0.0-beta.2'
const versions = {}
bumps.forEach(b => { versions[b] = semver.inc(curVersion, b) })
console.log('versions', versions)
const bumpChoices = bumps.map(b => ({ name: `${b} (${versions[b]})`, value: b }))
console.log('bumpChoices',bumpChoices)

const { bump, customVersion } = await inquirer.prompt([
  {
    name: 'bump',
    message: 'Select release type:',
    type: 'list',
    choices: [
      ...bumpChoices,
      { name: 'custom', value: 'custom' }
    ]
  },
  {
    name: 'customVersion',
    message: 'Input version:',
    type: 'input',
    when: answers => answers.bump === 'custom'
  }
])

console.log('bump, customVersion',bump, customVersion)
