//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8360364226:AAEksYmJqbLNF3SIrcMz81z1RjJOZlCdOVg" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "WhatsApp Bug" //your bot name
global.OWNER_NAME = "@Am_itachiuchiha" //your name with sign @
global.OWNER = ['https://t.me/Am_itachiuchiha'] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["5962658076"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.ibb.co/ydRKHnw/thumb.jpg' //your bot pp


//approval
global.GROUP_ID = -1002230970689; // Replace with your group ID
global.CHANNEL_ID = -1002380953539; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/Nextgenroom"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/Megahubbots"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://chat.whatsapp.com/Iwau9IDlCn4CR6fsmI3mc7"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@Freenethubtech"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/ramy_phoenix/"; // Replace with your ig link

global.owner = global.owner = ['256751722033'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
