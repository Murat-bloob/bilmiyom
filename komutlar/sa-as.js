const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: /sa-as aç`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bu komutu kullanmak için`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`ssaass_${message.guild.id}`, 'acik')
      message.reply('Ranger BOT > Artık biri sa diyince otomatik olarak Aleyküm Selam diyecek.')
    }
  if (args[0] == 'kapat') {
    db.set(`ssaass_${message.guild.id}`, 'kapali')
      message.channel.send('Ranger BOT > Artık biri sa diyince cevap vermicek...')
    }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as-ayarla'],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'sa as ayarla.',
  usage: 'sa-as'
};