const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
 let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
 if(args[0] === "müzik") { 
   
          var embed8 = new Discord.MessageEmbed()    
      .setTitle(` Ranger Bot - Müzik Komutları Yardım Menüsü`)
   .setThumbnail(message.guild.iconURL())
 .addField(prefix + "duraklat :", "Devam eden şarkıyı duraklatır")
  .addField(prefix + "devamet :", "duraklanan Şarkıyı devam ettirir.")
 .addField(prefix + "durdur :", "Şarkıyı durdurup,odadan ayrılmasını sağlar.")
   .addField(prefix + "oynat :", "Belirttiğiniz şarkıyı bulunduğunuz sesli kanalda çalar/oynatır")         
   .addField(prefix + "geç :", "çalan şarkıyı durdurur kuyrukta ki diğer şarkıya geçer") 
  .addField(prefix + "çalan :", "çalan şarkı bilgilerini gösterir") 
  .addField(prefix + "kuyruk :", "şarkı kuyruğunu gösterir")
  .addField(prefix + "ses :", "şarkı ses seviyesini ayarlarsınız") 
  message.channel.send(embed8)    
   
   return
 };
 
 
 ///////////////////////////////////////////////kurucu

 if(args[0] === "sahip") {   
   if(message.author.id !== "419214688061227009") return message.channel.send("Bu menüyü sadece Sahibim görüntüleyebilir!!")
           var embed8 = new Discord.MessageEmbed()    
      .setTitle(` <:boost:600301351431438369> Ranger Bot - Sahip Özel Yardım Menüsü <:boost:600301351431438369> `)
   .setThumbnail(message.guild.iconURL())
  .addField(prefix + "load :", "bota komut yüklemeyi sağlar.")
  .addField(prefix + "unload :", "botta olan komutları silmeyi sağlar")
 .addField(prefix + "reboot :", "Botu yeniden başlatmayı sağlar")
   .addField(prefix + "panel :", "Bot Panel Girişi")         
   .addField(prefix + "level :", "Kullanıcı seviye Boost") 
   .addField(prefix + "durum :", "Bot Durum göstergesi") 
  .addField(prefix + "oynuyor :", "Bot Oynuyor kısmı güncellemesi") 
  message.channel.send(embed8) 
 return
 };
 
 ///////////////////////////////////////////
 
 if(args[0] === "ayarlar") {
          var embed = new Discord.MessageEmbed()    
      .setTitle(`Ranger Bot - Sunucu Ayarlar Komutları Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL())
         .addField(prefix + "prefix :", "Botun kullanım prefixini değiştirmenizi sağlar. \n -Varsayılan Prefix : **r!**")
          .addField(prefix + "modlog :", "belirtilen kanalı bot mod-log olarak belirler,işlemleri oraya kaydeder *-Diğer Kullanımlar:*  \n " + prefix + "mod-log-ayarla")
 .addField(prefix + "girişçıkış :", "belirtilen kanalı bot giriş-çıkış Kanalı olarak belirler,işlemleri gelen kullanıcıları resimle karşılar *-Diğer Kullanımlar:*  \n " + prefix + "hoşgeldin")           
 .addField(prefix + "sa-as :", "Bot Otamatik sa-as *Kullanım:*  \n " + prefix + "sa-as <aç> / <kapat>")
      .addField(prefix + "seviye-ödül :", "Bot belirlenen rol ve belirlenen seviyeye göre kullanıcı o seviyeye geldiğinde o rolü Verir *-Diğer Kullanımlar:*  \n " + prefix + "level-ödül")
           .addField(prefix + "otorol :", "Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar. *-Diğer Kullanımlar:*  \n setautorole \n otoroldeğiştir")
          .addField(prefix + "otorol-kapat :", "Sunucu da belirlediğiniz otorol sistemini kapatır *-Diğer Kullanımlar:*  \n otorolsıfırla \n kapat-otorol")
                    .addField(prefix + "kapatotoyazı :", "Sunucu da belirlediğiniz otorol sisteminin mesaj göndermesini engeller")
          .addField(prefix + "özelkomut-ekle (demo) :", "Eklediğiniz yazıya ve cevaba göre bot, o yazıyı yazana o cevabı verir")
          .addField(prefix + "özelkomut-liste (demo) :", "Sunucu daolan özel komutları listeler")
          .addField(prefix + "özelkomut-sil (demo) :", "Sunucu da Olan özel komutu silmenizi sağlar")
          .addField(prefix + "linkengel <aç> <kapat> :", "Sunucuda link gönderilmesini engeller")
          .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL())  
      .setColor('RANDOM') 
 message.channel.send(embed); 
  return
};
  
  if(args[0] === "genel") {
          var embed = new Discord.MessageEmbed()    
      .setTitle(`Ranger Bot - Genel Komutları Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL())
      .addField(prefix + "canlıdestek :", "Ranger BOT Ekibinden canlı şekilde destek alırsınız.")
          .addField(prefix + "bug :", "Yazdığınız bot sorununu bot yapımcıya bildirir.")
      .addField(prefix + "döviz :", "diğer kurlar karşısında güncelşekilde TL değerini gösterir.")
      .addField(prefix + "emoji :", "Sunucu da bulunan emoileri id leri ile beraber gösterir.")
      .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL())  
      .setColor('RANDOM') 
  message.channel.send(embed);
  return
};

  
  if(args[0] === "eğlence") {
          var embed = new Discord.MessageEmbed()    
      .setTitle(`Ranger Bot - Eğlence Komutları Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL())
      .addField(prefix + "dondurma :", "Etiketlenen kişiye bot bir dondurma ısmarlar.")
      .addField(prefix + "gif :", "Bot tastgele Tweet,Komik paylaşım atar.")
      .addField(prefix + "sor :", "yazılan cümleye bot düşünüp cevap verir")
      .addField(prefix + "atasöz :", "Mustafa Kemal Atatürkün Sözlerinden Rastgele Atar")
      .addField(prefix + "vikipedi :", "Bot yazılan kelimeyi wikipedia`da Aratır")
      .addField(prefix + "söyle :", "bot yazılan şeyi o kanala gönderir")
      .addField(prefix + "sev :", "etiketlenen kişiyi seversiniz")
      .addField(prefix + "öldür :", "etiketlenen kişiyi öldürürsünüz") 
      .addField(prefix + "kedi :", "rastgele kedi resmi") 
          .setTimestamp()
      .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL())  
      .setColor('RANDOM')
message.channel.send(embed);
          return
};  
  
  
  if(args[0] === "moderasyon") {
          var embed = new Discord.MessageEmbed()    
      .setTitle(`Ranger Bot - Moderasyon Komutları Yardım Menüsü`)
      .setThumbnail(message.guild.iconURL())
      .addField(prefix + "ban :", "Kişiyi sunucudan kalıcı olarak uzaklaştırmanızı sağlar. *-Diğer Kullanımlar:* \n **" + prefix + "yasakla**")
      .addField(prefix + "mute :", "Kişiyi sunucudan belirtilen süre boyunca susturmanızı sağlar *-Diğer Kullanımlar:* \n **" + prefix + "sustur**")
      .addField(prefix + "unmute :", "Kişinin Susturuldu cezasını siler *-Diğer Kullanımlar:* \n **" + prefix + "susturaç**")
      .addField(prefix + "clear :", "Metin kanallarında toplu mesaj silmenizi sağlar. *-Diğer Kullanımlar:* \n **" + prefix + "clear**")
      .addField(prefix + "unban :", "Sunucudan yasaklanan kişinin yasağını açmayı sağlar *-Diğer Kullanımlar:* \n **" + prefix + "yasakaç**")
      .addField(prefix + "kick :", "Kişiyi sunucudan atmanızı sağlar. *-Diğer Kullanımlar:* \n r!at")
      .setTimestamp()
      .setColor('RANDOM')
      .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL())
      message.channel.send(embed);
   return
  };
      var embed = new Discord.MessageEmbed()
      
      .setTitle(`Ranger Bot - Yardım Komutlar Menüsü`)
      .setThumbnail(message.guild.iconURL())
      .setColor('RANDOM')
      .setTimestamp()
      .addField(prefix + "yardım moderasyon :", "Moderasyon Komutları Yardım Menüsü")
      .addField(prefix + "yardım eğlence :", "Eğlence Komutları Yardım Menüsü")
      .addField(prefix + "yardım genel :", "Genel Komutlar Yardım Menüsü")
      .addField(prefix + "yardım ayarlar:", "Sunucu Ayarları Yardım Menüsü")
      .addField(prefix + "yardım müzik:", "Müzik Komutları Yardım Menüsü")
      .addField(prefix + "yardım sahip:", "Sahip komutları yardım menüsü")
      .setFooter(`${message.author.username} Tarafından İstendi!`, message.author.avatarURL())
     .setColor('RANDOM')
      message.channel.send(embed);


};

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'yardım',
      description: 'Bot komutlarını gösterir',
      usage: 'yardım'
    };
