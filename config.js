// thank you to ALLAH Swt
//tq nurutumo (creator) (mastah:v) 
//tq ariffb (stikerin) (mastah:v) 
//fa

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/LgVZAb0emPrDMxU41qOjvj', ''] // ganti jadi group lu
global.owner = ['6289504575881','6289504575881'] // Put your number here //owner eval
global.kontak = ['6289504575881','6289504575881'] //Ketika ada yang ngetik #owner
global.mods = ['6289504575881'] // Want some help?
global.prems = ['6285876902820','6285876902820','6285876902820'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'cb15ed422c71a2fb' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'cb15ed422c71a2fb',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
} //note sc gw enc beberapa di plugins dll ada lumayan kallo mau yang no enc beli //30k udah dapet N0 enc 100% ke wa.me/6285876902820

lolkey = 'rey2k21'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'fahril ahmad'
namagithub = 'Fahrilahmad'
kasihcaption = `Nih kak`
namakontak1 = 'swister'
namakontak2 = 'swister'
caption = 'Nih Kak'

// Sticker WM
global.packname = 'By swister' // ganti aja
global.author = 'fahrilbotz' // ganti aja


bc = 'fahrilbotz' //fahril Broadcast
footer = '\n©swister'
namabot = 'nullbot'
namalu = 'swister'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?script=chrominium-logo&_loc=generate&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari fahrilbotz
global.image = 'https://telegra.ph/file/e2a9c1963a04a2f6f3c02.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
