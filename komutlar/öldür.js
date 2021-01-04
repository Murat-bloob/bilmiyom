const Discord = require('discord.js');
exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
   
    
    if (message.mentions.users.cache.size < 1) return message.reply('Herhangi birini, belirtmelisin!').catch(console.error);
 
    const oldur=new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(message.author.username + ` ${user}` + ' adlı kişiyi, öldürdü! :gun:')
    .setImage('https://cdn.discordapp.com/attachments/363746758083477505/400337232625401856/animation_2.gif')
    return message.channel.send(oldur);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'öldür',
  category: 'Eğlence komutları!',
  description: 'Belirtilen kişiyi, öldürür!',
  usage: 'öldür'
};
