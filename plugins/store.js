let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `store fahrilbotz

*+==================================+*

📱 Akun WhatsApp Indonesia: 
💰 Harga : Rp. 10.000,- / Akun

💭 Spam Whatsapp
💰 Harga : Rp. 15.000,- / 100 Message (𝙫𝙞𝙧𝙩𝙚𝙠) 

🖲️ Host by fahril ahmad

minat coba? 
Hubungi wa.me/6285876902820

*+==================================+*

yakali minat: 1 Oktober 2021
`.trim()
  const button = {
        buttonText: 'beli dm ff/ml',
        description: kontol,
        sections:  [{title: "silahkan di pilih", rows: [
        {title: 'beli diamond ml', description: "100% amanah", rowId:".dmml"},
        {title: 'sewabot', description: "", rowId:".sewa"},
        {title: 'beli diamond ff', description: "100% amanah", rowId:".dmff"},
        {title: 'Owner', description: "", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['info', 'tools']
handler.command = /^(store)$/i
handler.help = ['store']
module.exports = handler

//ubah aja case by 
