const Discord = require('discord.js');
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));

exports.run = async (client, message) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix 
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');
      var embed2 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Link Koruması')
      .addField("Hatalı Kullanım! :",  '"aç" veya "kapat" Yazmalısın! \n Örnek: ' + prefix + 'linkengel aç // ' + prefix + 'linkengel kapat') 
      .setColor('RED')



		       var embed4 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Link Koruması')
      .addField("Başarılı,Aktif! :",  'Artık **' + message.guild.name + '** Sunucusunda Link koruması **Aktif!** ✅  \n Ranger BOT "Üyeleri Yasakla" iznindeki üyelerin Link Göndermesini Engellemeyecek!') 
      .setColor('RED') 


		       var embed5 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Link Koruması')
      .addField("Başarılı,Devre Dışı! :", 'Artık **' + message.guild.name + ' Sunucusunda "Link Koruması" Artık Atif Değil! \n **Bot Linkleri engellemeyecek.**') 
      .setColor('RED') 
	if(secenekler.length < 1) return message.channel.send(embed2);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.channel.send(embed2)
	if (secenekler === "aç" || secenekler === "on") {
		
      
    
		message.channel.send(embed4)
    
  if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })
	};

	if (secenekler === "kapat" || secenekler === "off") {
    
               if(!linkEngel[message.guild.id]){
		linkEngel[message.guild.id] = {
			linkEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/linkEngelle.json", JSON.stringify(linkEngel), (x) => {
        if (x) console.error(x)
      })

       delete linkEngel[message.guild.id]
       delete linkEngel[message.guild.id].linkEngel

		message.channel.send(embed5)
    
	};
}

exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['reklamengelle'],
		permLevel: 3
	  };
	  
exports.help = {
		name: 'linkengelle',
		description: 'Link engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'linkengelle <aç/kapat>'
	};