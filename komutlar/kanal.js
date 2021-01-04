const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, params, args) => {
   let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix    
  const embed = new Discord.MessageEmbed()
        .setColor("RED")
          .setTitle(`Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, `${prefix}girişçıkış <#kanal>`)
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send(embed)


db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
      const embed2 = new Discord.MessageEmbed()
    .setDescription('» Başarılı! '+ message.guild.name +' Sunucusunda ki Hoşgeldin-Görüşürüz Resimleri '+ i +' Kanalına gönderilecek!')
    .setColor("GREEN")
  message.channel.send(embed2)  
        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['hoşgeldin'],
 permLevel: 0
};

exports.help = {
 name: 'hosgeldin',
 description: 'blmm',
 usage: 'girişçıkış'
};