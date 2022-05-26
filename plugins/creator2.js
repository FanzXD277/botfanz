const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "Fanz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Fanz\nitem1.TEL;waid=62895321033713:62895321033713\nitem1.X-ABLabel:📍 Creator FanzBot\nitem2.EMAIL;type=INTERNET:.@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Sul- Sel\nitem5.X-ABLabel:──────[ Fanz ]──────\nEND:VCARD"
  }, {
    "displayName": "TataXyz",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:TataXyz\nitem1.TEL;waid=6282157312489:6282157312489\nitem1.X-ABLabel:📍 Couple AxellXyz\nitem2.EMAIL;type=INTERNET:axellxyzz@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/3kXpKwL/\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | KALIMANTAN\nitem5.X-ABLabel:────[ TataXyz ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator)$/i

module.exports = handler
