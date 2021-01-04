const Discord = require("discord.js");
const ms = require("ms");
const db = require('quick.db');
module.exports.run = async (bot, message, args) => {

const ayarlar = require('../ayarlar.json');

 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply("Bu Komutu Kullanmak İçin : " + prefix + "sustur <kullanıcı> <süre>");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Hata: susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi susturmaya yetmiyor!");
let muterole = message.guild.roles.cache.find(r => r.name === "Susturuldu");

  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        name: "Susturuldu",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Bu Komutu Kullanmak İçin : '+ preffix +'mute <Kullanıcı> <Süre> Olarak Yazmalısınız.");

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> için ses kapatıldı! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.roles.remove(muterole.id);
    message.channel.send(`<@${tomute.id}> Kişinin susturulma süresi dolduğu için mutesi kaldırıldı!`);
  }, ms(mutetime));

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'gsustur' , 'mute','sustur' ],
  permLevel: 2
};

exports.help = {
  name: 'geçici-sustur',
  description: 'Sureli Susturur.',
  usage: 'geçici-sustur [Kullanıcı] [Süre]'
};