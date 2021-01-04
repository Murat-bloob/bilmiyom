const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
var prefix = ayarlar.prefix;

var yazı = db.fetch(`oynuyor_`, yazı) 


module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
   var oyun = [
    "🌍Varsayılan Prefixim || r!", 
        "🎗7/24 Aktif!",  
        "👑Daha iyi bir Discord için Hizmetinizdeyim!",
        "r!yardım",
        client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + " Kullanıcı | " + client.guilds.cache.size + " Sunucu | " + client.channels.size + " Kanal",
        "💎Beni Sunucuna ekle! || r!davet",
         "Bug? >> Bize Bildir! || r!bug ",
         "Destek? >> Canlı Destek! || r!canlıdestek ",
         yazı
   ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "https://www.twitch.tv/rammus53");
        }, 2 * 13000);
}