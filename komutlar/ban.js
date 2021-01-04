const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField(':warning: Uyarı :warning:', '`Ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('yasaklama sebebini yazmalısın.');
  if (message.mentions.users.cache.size < 1) return message.reply('yasaklanacak kullanıcıyı yazmalısın!').catch(console.error);

  if (!message.guild.member(user).members.bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.members.ban(user, 2);


  
  
      var embed2 = new Discord.MessageEmbed()   
      .addField("**yasaklama** :",  user + ' adlı kullanıcı Sunucudan **Yasaklandı!** <a:banned:599681356800196658> ') 
      .setColor('#EE0004')
      message.channel.send(embed2);  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban"],
  permLevel: 2
};

exports.help = {
  name: 'yasakla',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'yasakla [kullanıcı] [sebep]'
};
