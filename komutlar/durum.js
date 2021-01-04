const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.author.id !== "419214688061227009") return message.channel.send("Sadece Sahhibim durumumu görebilir!")
  var embed97 = new Discord.MessageEmbed()   
      .setTitle(`<a:buyuktur:600296871230963732>**Merhaba Sahibim!**<a:kucuktur:600296925631217664>`)
      .addField("**İşte İstatistiğim!** :", ' <a:yukleniyor:600297875368443954> Kullanıcı Sayısı:**' + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + '** \n <a:ayarlar:600298369260322817> Komut Sayısı:**' + client.commands.size + '** \n <a:sabitle:600298981205082125> Sunucu Sayısı:**' + client.guilds.cache.size + '** \n Anlık Pingim: **' + client.ws.ping + '** ')     
  .setColor("8B1578")
      .setFooter('seni seviyorum sahibim <3')  
 message.channel.send(embed97)

let a = client.ws.ping
if (a > 120) {
  var embed9 = new Discord.MessageEmbed()   
      .setTitle(' <:warning:> **Yüksek Ping Uyarısı!**')
     .addField("Ping: ", client.ws.ping)
  .setColor("8B1578")
      .setFooter('Hayırr! Olamaz :(')  
 message.channel.send(embed9)  

message.channel.send(' <a:yukleniyor:600297875368443954> **Ranger BOT Yeniden başlıyor...**')
process.exit(0);
};


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['durum'],
  permLevel: 0
};

exports.help = {
  name: 'durum',
  description: 'bot durumu',
  usage: 'durum'
};
