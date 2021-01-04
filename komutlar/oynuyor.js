const Discord = require('discord.js')
  const db = require('quick.db');

exports.run = async (client, message, args) => {
	if(message.author.id !== "419214688061227009") return message.channel.send('**Sadece "SAHİBİM" Oynuyor kısmımı güncelleyebilir.**')
  let yazı = args.join(" ");

           let tamam = new Discord.MessageEmbed()
           .setTitle('**Başarılı!** <a:yess:602116858879148032> \n Bot **Oynuyor Kısmı** __' + yazı + '__ Olarak Değiştirildi!')
           .setColor('GREEN')  
message.channel.send(tamam)
           db.set(`oynuyor_`, yazı) 
  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'oynuyor',
  description: 'taslak',
  usage: 'oynuyor'
};