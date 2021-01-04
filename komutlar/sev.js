const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Sevdiğini Yazmalısın  ? **');
    const embed = new Discord.MessageEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Çok Seviyor  <a:kalp:602102079837831183>**')
	.setImage(`https://cdn.discordapp.com/attachments/534007653106581515/534420566573187072/tenor.gif`)
    return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sev',
  description: 'İstediğiniz Kişiye Çekiç Atarsınız.',
  usage: 'sev'
};