/*
 -  Script by   : Maxtream_09
 -  Github.     : https://github.com/Maxz-09
 -  Sosmed    : https://linktr.ee/Maxtream_09
 */


//--------------------------× GLOBAL NAME ×--------------------------//
global.devName = 'Maxtream_09'
global.botName = 'Vikaru-Md'
global.author = '©Maxz-09'
global.packname = 'By : Vikaru-Md'


//------------------------× GLOBAL NUMBER ×-----------------------//
global.owner = ["6289508899033"] // (62) Country code
global.devNumber = "6289508899033" // No limit


//----------------------------× GLOBAL LINK ×---------------------------//
global.sosmed = 'https://linktr.ee/Maxtream_09'
global.groupUrl = 'https://chat.whatsapp.com/JfpGsd5GPh5EzvRVjm54tx'


//-----------------------× GLOBAL VARIABLE ×----------------------//
global.version = 'V1.0.0 demo'
global.credit = '> *`ᴄʀᴇᴅɪᴛ :`* ©2021 - 2024'



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