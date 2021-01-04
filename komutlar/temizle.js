const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın!** 🚫");
message.channel.send(message.channel.name + ' Adlı kanaldan **' + args[0] + '** Mesaj Silindi!')
  let messagecount = parseInt(args.join(' '));
  message.channel.messages.fetchs({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));


}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};