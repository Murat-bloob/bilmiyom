const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = async(client, message) => {
 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

    let args = message.content.split(' ').slice(1);
    const secenekler = args.slice(0).join(' ');

    var errembed = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Küfür Koruması')
      .addField("Hatalı Kullanım! :",  '"aç" veya "kapat" Yazmalısın! \n Örnek: ' + prefix + 'küfürengel aç // ' + prefix + 'küfürengel kapat') 
      .setColor('RED')
    if(secenekler.length < 1) return message.channel.send(errembed);

    message.delete();

            if (secenekler === "aç") {
               var embed4 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Küfür Koruması')
      .addField("Başarılı,Aktif! :",  'Artık' + message.guild.name + ' Sunucusunda küfür koruması **Aktif!** ✅  \n Ranger BOT "Üyeleri Yasakla" iznindeki üyelerin Küfür etmesini Engellemeyecek!') 
      .setColor('RED') 
              message.channel.send(embed4).then(m => m.delete(10000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "acik"
          };

          fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };

    if (secenekler === "kapat") {
             var embed5 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT - Küfür Koruması')
      .addField("Başarılı,Devre Dışı! :",  message.guild.name + ' Sunucusunda "Küfür Koruması" Artık Aktif Değil! \n **Bot Küfürleri engellemeyecek.**') 
      .setColor('RED')  
      message.channel.send(embed5).then(m => m.delete(5000));
        küfürEngel[message.guild.id] = {
            küfürEngel: "kapali"
          };

        fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
            if (err) console.log(err)
          });
    };
}

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['küfür-engel'],
        permLevel: 3
      };
      
      exports.help = {
        name: 'küfür-engel',
        description: 'Küfür engelleme sistemini, açıp kapatmanızı sağlar.',
        usage: 'küfür-engel <aç> veya <kapat>'
      };