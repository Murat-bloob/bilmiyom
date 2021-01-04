const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => {
  
  let user = message.mentions.users.first();

    db.delete(`preuye_${user.id}`) 
            const embed3 = new Discord.MessageEmbed()
      .setTitle('Ranger BOT - Premium')
     .setDescription('Birilerinin Havası sönmüş gibi!? Artık ' + user + ' Bir **Premium Üye** Değil!')
    .setColor("FF0000")
    .setImage('https://68.media.tumblr.com/cf6eb090d72ead2753686b86b929254d/tumblr_o7n5zd8mku1vtwcw2o1_400.gif')
 message.channel.send(embed3) 
   
           const embed2 = new Discord.MessageEmbed()
      .setTitle('**Ranger BOT - Premium**')
     .setDescription('Bilgiler')
      .addField("İsim :", user)
      .addField("Hesap Açılış Tarihi :", message.author.createdAt)
     .setFooter('değeri sönmüş gibi...')
    .setColor("FF0000")
client.channels.cache.get('600442189834616842').send(embed2)  
  
     };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['preüye-al'],
  permLevel: 4
};

exports.help = {
  name: 'premium-al',
  description: 'pre üye almak',
  usage: 'preüye-al'
};