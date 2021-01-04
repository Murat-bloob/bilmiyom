const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

var sahip = ayarlar.sahip;

exports.run = async (client, message, args) => {
if ( message.author.id != ayarlar.sahip ){
   message.channel.send("**Bu komutu Sadece **Bot Yapımcısı** kullanabilir!")
  }else{
  let nesne = args[0]
  if (!nesne) return message.channel.send('Kullanıcı engeli açılmadı!')
   
  db.delete(`kullanicikaraliste_${nesne}`)
   message.channel.send("`" + nesne + "` Adlı kullanıcı **Botu** kullanabilir!")
  }   
 };
                                        
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["beyazliste"],
    permLevel: 5
}

exports.help = {
    name: 'engelaç',
    description: '',
    usage: 'engelaç'
}