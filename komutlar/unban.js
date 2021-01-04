const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
	

  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', '`unban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  client.members.unbanAuth = message.author;
  let user = args[0];
  if (!user) return message.reply('Banı kaldırılacak kişinin ID numarasını yazmalısın.').catch(console.error);
  message.guild.members.unban(user);

message.channel.send(user.id + ' **İD liKullanıcının Yasağı Kaldırıldı!**')
  

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban'],
  permLevel: 2
};

exports.help = {
  name: 'yasakaç',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'yasakaç [kullanıcı] [sebep]'
};
