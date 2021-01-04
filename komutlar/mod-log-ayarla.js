const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../loglar.json');
let kanal = JSON.parse(fs.readFileSync("./log.json", "utf8"));

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        const embed = new Discord.MessageEmbed()

     .setDescription(`:x: | Mod Log Kanalı etiketlemelisin.`)
    .setColor("RED")
        message.channel.send({embed})
        return
    }

    if(!kanal[message.guild.id]){
        kanal[message.guild.id] = {
            gkanal: channel.id
        };
    }
  
    fs.writeFile("./log.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
    const embed2 = new Discord.MessageEmbed()
       .setDescription('✅ Mod Log Kanalı başarıyla ' + channel + ' olarak Ayarlandı!')
        .setColor("GREEN")
        .setTimestamp()
    message.channel.send(embed2)
  

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog','mod-log-ayarla'],
    permLevel: 0
}

exports.help = {
    name: 'log-ayarla',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'mod-log <#kanal>'
}




