const Discord = require("discord.js");
exports.run = (client, message, args) => {
  

  let user = message.mentions.users.first() || message.author;     
  
      var embed = new Discord.MessageEmbed()   
      .setTitle(`**PROFİL FOTOĞRAFI**`)
      .setDescription(`Başarılı! ${user.username} Adlı kullanıcının **Profil Fotoğrafını** Buldum!`)
      .setColor("BLUE")
.setImage(user.avatarURL())
      .setTimestamp()
      .setFooter('made by draqons')
   
      message.channel.send({embed}) 

  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pp'],
  permLevel: 4
};

exports.help = {
  name: 'profil',
  description: 'profil',
  usage: 'profil'
};
 