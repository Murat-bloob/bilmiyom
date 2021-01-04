const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("577588765606936576")//bug repot kanal id

if (!bug) return message.channel.send('Bir hatam var ama sen Yazmıyormusun?')

let embed = new Discord.MessageEmbed()
.setTitle("Bug Report")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")
bot.channels.cache.get('599599050739679243').send(embed)
 
  var embed2 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT')
      .addField("**Teşekür Ederim!** :",' **'  + bug + '** Hatamı Sahibime ilettim! En yakın zaman da düzelteceğiz ;) ') 
      .setColor('GREEN')
message.channel.send(embed2)
  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug',
  description: 'bug bildirme',
  usage: 'bug'
}