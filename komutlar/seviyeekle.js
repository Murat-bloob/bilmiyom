
const Discord = require('discord.js');
const db = require("quick.db");


exports.run = async (client, message , args) => {
if(message.author.id !== "419214688061227009") return message.channel.send("Sadece Sahibim Seviye Ekleyebilir")
  var user = message.mentions.users.first()
  var id = user.id
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  db.set(`lvl_${id}_${gid}`, args[0]);
      var embed2 = new Discord.MessageEmbed()   
      .addField("**SEVİYE** :",  user + ' Adlı Kullanıcının Leveli **' + args[0] + '.seviye** olarak Değiştirildi! \n '+ user + ' Adlı Kullanıcının Yeni **Seviyesi ' + args[0] + '.seviye**') 
      .setColor('GREEN')
      message.channel.send(embed2); 




};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'level', 
  description: 'userin sevviyesini ekler',
  usage: 'level [@kullanıcı] [level]' 
};