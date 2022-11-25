const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['966504124495']
global.OwnerNumber = ['966504124495']
global.ownertag = ['966504124495']
global.BotName = "𝗥𝗔𝗶 | 𝗧𝗔𝗟𝗔𝗟"
global.packname = "𝗥𝗔𝗶 | 𝗧𝗔𝗟𝗔𝗟"
global.author = "966504124495"
global.OwnerName = "𝗥𝗔𝗶 | 𝗧𝗔𝗟𝗔𝗟"
global.BotSourceCode = "https://chat.whatsapp.com/Bdsm1wW3CdD83mdSRTo11P"
global.SupportGroupLink = "https://chat.whatsapp.com/Bdsm1wW3CdD83mdSRTo11P"
global.sessionName = "session"

// Prefix //
// 🎗don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['.'] 


global.location = "bihar, India"
global.reactmoji = "💙"
global.themeemoji = "💙"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://chat.whatsapp.com/Bdsm1wW3CdD83mdSRTo11P"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: '*✭〘.... تم ياقلبي 💙✨〙✭*',
    useradmin: '『 لازم تكون مشرف ياقلبي معليش 💙✨ 』',
    botadmin: '『 ارفع البوت ادمن الاول 』',
    botowner: 'ا*✭〘الميزه للمطور بس ياقلبي معليش 💙✨〙✭*,
    grouponly: '『 الميزه للمجوعات ياعسل 💙✨! 』',
    privateonly: '『 الميزه في الخاص لازم ياقمر 💙✨! 』',
    botonly: '『 *✭〘هذي الميزه للبوت فقط 💙✨〙✭*! 』',
    waiting: '『 استني شويه ياقلبي يتحمل 💙✨... 』',
    nolink: '『 فين الرابط? 』',
    error: '『 ايرور! 』',
    banned: '『 انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك! 』',
    bangc: '『 تم حظر الجروب دا من استخدام البوت! 』',
    nonsfw: '『 اكتب المجهوله واختار فتح ثم اكتب .القائمه-المجهوله! 』'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
