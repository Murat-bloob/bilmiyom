const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const ayarlar = require("../ayarlar.json")


exports.run = async (client, message, args) => {
let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
        message.delete()
if (message.channel.name !== '💬bot-komutları') {
if (!message.member.hasPermission("ADMINISTRATOR"))  {
var embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription('Yanlış Yer!')
.setThumbnail('')
.setTimestamp()
.setFooter(message.author.username , message.author.avatarURL())
return message.channel.send(embed).then(msg => msg.delete(8000));
 }
} 
  
  if(!args[0]) {
        let embed = new Discord.MessageEmbed();
        embed.setDescription(":x: Hata | Örnek Kullanım= "+ ayarlar.prefix + `döviz USD \n Kur Birim Kodları= \`\`USD EUR AUD DKK GBP CHF SEK CAD KWD NOK JPY SAR BGN RON RUB IRR CNY PKR QAR\`\``);
        embed.setColor("RED");
        message.channel.send({embed: embed});
    }
    if (args[0] === "USD"){
        const res = await Doviz.getKur("USD");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL());
        embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`);
        embed.setColor("RED");
        embed.addField(`Alış`,res.alis);
        embed.addField(`Satış`,res.satis,true);
        embed.addField(`Birim Kodu`,res.kod,true);
        message.channel.send({embed: embed});
    }
   if(args[0] === "EUR"){
const res = await Doviz.getKur("EUR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "AUD"){
const res = await Doviz.getKur("AUD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "DKK"){
const res = await Doviz.getKur("DKK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "GBP"){
const res = await Doviz.getKur("GBP");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CHF"){
const res = await Doviz.getKur("CHF");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "SEK"){
const res = await Doviz.getKur("SEK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CAD"){
const res = await Doviz.getKur("CAD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "KWD"){
const res = await Doviz.getKur("KWD");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "NOK"){
const res = await Doviz.getKur("NOK");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "JPY"){
const res = await Doviz.getKur("JPY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "SAR"){
const res = await Doviz.getKur("SAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "BGN"){
const res = await Doviz.getKur("BGN");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "RON"){
const res = await Doviz.getKur("RON");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "RUB"){
const res = await Doviz.getKur("RUB");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "IRR"){
const res = await Doviz.getKur("IRR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "CNY"){
const res = await Doviz.getKur("CNY");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "PKR"){
const res = await Doviz.getKur("PKR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
   if(args[0] === "QAR"){
const res = await Doviz.getKur("QAR");
const tarih = await Doviz.guncelTarih();
let embed = new Discord.MessageEmbed()
embed.setAuthor(`${res.isim} Güncel Kur Analizi`,message.author.avatarURL())
embed.setDescription(`Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`)
embed.setColor("RED")
embed.addField(`Alış`,res.alis)
embed.addField(`Satış`,res.satis,true)
embed.addField(`Birim Kodu`,res.kod,true)
message.channel.send({embed: embed});
   }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doviz","kur","dövizkur","kuranaliz","kurgetir","dövizanaliz","usd","euro","dolar","eur"],
  permLevel: 0
};

exports.help = {
  name: 'döviz',
  description: 'Güncel Döviz kurlarını gösterir.',
  usage: 'döviz'
};