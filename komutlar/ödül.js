const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message, args) => {

  var user = message.author;
  var role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
  if(!role) return message.channel.send("verilmesi gereken rol`ü veya id sini girmelisin!");
  var lvl = args[1];
  if(!lvl) return message.channel.send(role + ' Rolünü Kaçıcı seviye de vermeliyim?');
  
  db.set(`role_${message.guild.id}_${lvl}seviye`, role.id);

     message.channel.send('Başarılı! Artık **'+ message.guild.name + ' ** Sunucusun da** ' + lvl + '** Seviyede,**' + role + '** Rolünü vereceğim') 
  
  
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['level-ödül'], 
  permLevel: 2
};

exports.help = {
  name: 'seviye-ödül', 
  description: 'Belirtilen seviyeye gelince kullanıcıya verilecek rolleri belirler.', 
  usage: 'seviye-ödül <@rol | rol_id> <seviye>'
};