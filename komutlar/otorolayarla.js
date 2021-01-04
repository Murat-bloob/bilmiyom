const fs = require ('fs')
const Discord = require('discord.js')
const db = require('quick.db');
  var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
const ayarlar = require('../ayarlar.json');
 
exports.run = async (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu sadece *Yönetici* iznine sahi üyeler kullanablilir.`);

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  	let profil = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send("Ayarlamam İçin Bir Rol Etiketlemelisin. \nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \nÖrnek Kullanım : " + prefix +"otorol @rol #kanal");
  if (message.guild.member(message.author.id).hasPermission(0x8))

    {
      var mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.channel.send("Rolü etiketlemelisin!".then(msg => msg.delete(5000)));


	if(!profil[message.guild.id]){

		profil[message.guild.id] = {

			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}

	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id

	fs.writeFile("./otorol.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.MessageEmbed()
		.setDescription(`${message.guild.name} Sunusucunda Başarıyla Otorol: ${args[0]} olarak,\nOtorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı.\n\nOto Rol'ü kapatabilmek için **${prefix}otorol-kapat** yazabilirsiniz! \n Oto rol mesajını kapatabilmek için **${prefix}kapatotoyazı** Yazabilirsiniz!`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}
db


exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setautorole", "otorol", "otoroldeğiştir"]
}

exports.help =
{
  name: 'otorol-ayarla',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}