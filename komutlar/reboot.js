const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== "419214688061227009") return message.channel.send("Bu komutu Sadece sahibim Kullanabilir!")
     
      var embed = new Discord.MessageEmbed()   
      .addField("**Reboot** :", "**Geliştiricim** Botu *Yeniden Başlatmamı* istedi hemen Yapıyorum! <a:a:599680579382018100> ") 
      .setColor('GREEN')
  
  
  message.channel.send(embed).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
     

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reboot"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'reboot',
  usage: 'reboot'
};