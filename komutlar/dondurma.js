const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
      
    var user = message.mentions.users.first() || message.author;
  
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(user + ' Bir Dondurma Yaladı   .')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/7747c55a95c3017ee8350c4dcd716df8/tenor.gif`)
    return message.channel.send(sunucubilgi);
    
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'dondurma',
  description: 'dondurma',
  usage: 'dondurma'
};