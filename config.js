//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +919366316018
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "256751722033" //owner number
global.ownername = "Itachi Uchiha" //owner name
global.dev = ["256751722033"]
global.ownername = "Itachi Uchiha"
global.ytname = "YT: Freenethub Tech" //youtube channel name
global.socialm = "GitHub: XPTOOLS" //github username
global.location = "Kampala, Uganda" //location

global.ownernumber = '256751722033'  //creator number
global.ownername = 'Itachi Uchiha' //owner name
global.botname = 'WhatsApp Bug' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'Itachi Uchiha\n\nContact: +256751722033'

//console view/theme
global.themeemoji = '🪀'
global.wm = "Itachi Uchiha Inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @FREENETHUBTECH\nTelegram: @Am_ItachiUchiha\nWhatsApp: +256751722033`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @FREENETHUBTECH\nTelegram: @Am_ItachiUchiha\nWhatsApp: +256751722033`,
}

global.banner = ["447893985392@s.whatsapp.net","995544996873@s.whatsapp.net","916909137213","919366316018@s.whatsapp.net","919485490229@s.whatsapp.net","919402104403@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
