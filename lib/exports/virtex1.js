/*
 -  Script by   : Maxtream_09
 -  Github.     : https://github.com/Maxz-09
 -  Sosmed    : https://linktr.ee/Maxtream_09
 */


// Text Virtex1
const virtex1 =
`
Lorem Ipsum
`
exports.virtex1 = virtex1

// Refreshing File After Recode/Editing
const fs = require('fs')
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log()
console.log(`› [ ${chalk.black(chalk.bgBlue(' Update Files '))} ] - ${__filename}`)
delete require.cache[file]
require(file)
})