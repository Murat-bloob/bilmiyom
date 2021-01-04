
const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message) => {

  var user = message.mentions.users.first() || message.author;
  var id = user.id
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

db.delete(`xp_${id}_${gid}`, 0);
db.delete(`lvl_${id}_${gid}`, 1);
message.channel.send(user + ' Adlı kullanıcının leveli **Sıfırlandı!**')




};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 3
};

exports.help = {
  name: 'seviyesıfırla', 
  description: 'userin sevviyesini siler',
  usage: 'seviyesıfırla [@kullanıcı]' 
};