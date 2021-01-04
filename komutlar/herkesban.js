	const Discord = require('discord.js')
exports.run = (client, message, args) => {
	try {
		const embed = new Discord.MessageEmbed()
	
      .setTitle('Sunucu da bulunan kodlar atılıyor.. \n Eğer çık fazla rol varsa bot hata vericektir!')
			.setColor('GREEN')
			.setTimestamp()
		message.channel.send(embed)

  
  		const codeming = new Discord.MessageEmbed()
	
      .addField(`${message.guild.name} Sunucusunda ki Roller: \n`, message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
			.setColor('GREEN')
			.setTimestamp()
		message.channel.send(codeming)
  //yasin
  } catch (err) {
		const embed = new Discord.MessageEmbed()
			.setTitle('**Hata** \n Sunucuda çok fazla rol var bot atamıyor!')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 0
}
exports.help = {
	name: 'roller',
	description: 'sunucuda bulunan rolleri listeler',
	usage: 'roller'
}
