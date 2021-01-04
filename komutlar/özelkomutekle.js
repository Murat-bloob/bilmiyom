const Discord = require("discord.js")
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")


exports.run = async(bot, message, args) => {
 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
                let mentionEmbed = new Discord.MessageEmbed()
                     .setDescription(`Yanlış Kullanım!`)
                     .setColor('RED')
                    // Return Statements
                     if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
         .setDescription(`Bu komutu kullanabilmek için **YÖNETİCİ** iznine sahip olmalısın!`)
         .setColor(`RED`));
                     if (!args[0]) return message.channel.send(mentionEmbed)
                     if (!args[1]) return message.channel.send(mentionEmbed)
                
            
                     let komut;
                     if (!args[0]) komut = 'Eklenecek Komutu yazmalısın!'; 
                     else komut = (args[0]);
 if(args[0] == 'yardım' || args[0] == 'afk' || args[0] == 'ban' || args[0] == 'bug' || args[0] == 'davet' || args[0] == 'dondurma' || args[0] == 'döviz' || args[0] == 'emoji' || args[0] == 'eval' || args[0] == 'gif' || args[0] == 'girişçıkış' || args[0] == 'icon' || args[0] == 'invite' || args[0] == 'kick' || args[0] == 'kullanıcıbilgim' || args[0] == 'küfür-engel' || args[0] == 'prefix' || args[0] == 'ping' || args[0] == 'reboot' || args[0] == 'seviye' || args[0] == 'sustur' || args[0] == 'susturaç' || args[0] == 'temizle' || args[0] == 'unban' || args[0] == 'cinsiyet' || args[0] == 'yazdır' || args[0] == 'çekiliş' || args[0] == 'ödül') return message.channel.send('Botta varolan bir komutunu ekleyemezsin.')                   
  let gonderileceksey
                     if (args.slice(1, 1000, args[1]).join(' ') === 'NONE') gonderileceksey = ''; 
                     else gonderileceksey = args.slice(1, 1000, args[1]).join(' '); 
                
                    // This will update the .text of the joinMessageDM_guildID object.
                     let welcomeEmbed = new Discord.MessageEmbed()
                     .addField(`${message.guild.name}`, ' Başarılı! Artık biri** ' + komut + '** Diyice Ranger BOT** ' + gonderileceksey + '** Diyicek!')
                     .setColor('GREEN')
                     
                     db.set(`sunucuKomut_${message.guild.id}`, komut)
                     db.set(`sunucuMesaj_${message.guild.id}`, gonderileceksey)
                        message.channel.send(welcomeEmbed) // Finally, send in chat that they updated the channel.
                     };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['özelkomutekle','özelkomut-ekle','özel-komutekle'],
  permLevel: 0
};

exports.help = {
  name: 'özel-komut-ekle',
  description: 'Özel komut eklersiniz.',
  usage: 'özelkomutekle'
};