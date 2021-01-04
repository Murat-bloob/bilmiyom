const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.MessageEmbed()
        .setDescription(message.guild.name + ' Adlı sunucunun İcon`u')
        .setImage(message.guild.iconURL())

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};