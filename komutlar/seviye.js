const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message) => {

  var user = message.mentions.users.first() || message.author;
  var id = user.id
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  var embed = new Discord.MessageEmbed()
    .setTitle('Seviye Bilgisi')
    .addField("Şuanki Seviye: ", lvl ? lvl : "0")
    .addField("Toplam xp: ", xp ? xp : "0")
    .addField("Gereken XP: ", xp ? xpToLvl - xp : "0")
    .setColor('BLUE')
    .setFooter(`made by draqons`)
  message.channel.send(embed);
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye', 
  description: 'Seviyenizi gösterir.',
  usage: 'seviye [@kullanıcı]' 
};