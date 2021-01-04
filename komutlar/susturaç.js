const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
var mutelirolu = "Susturuldu" 	
let user = message.mentions.members.first()
  let muterol = message.guild.roles.cache.find(`name`, mutelirolu);
user.roles.remove(muterol.id)
 
 
  message.channel.send(user +' Adlı kullanıcı`nın Susturulması Kaldırıldı!')

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute'],
  permLevel: 2
};

exports.help = {
  name: 'susturaç',
  description: 'kişinin susturuldu ini siler,.',
  usage: 'susturaç'
};
