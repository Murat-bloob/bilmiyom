const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');
exports.run = (client, message, args) => {

  const filter = m => m.author.id === message.author.id;
    if(message.author.id !== "419214688061227009") {
            const embed2 = new Discord.MessageEmbed()
      .setTitle('**Hata!**')
     .setDescription(message.member.name + ' Adlı, ' + message.member.id + ' İdli kullanıcıda Ranger BOT Panel girişi izni Bulamadım!')
    .setColor("RED")
 message.channel.send(embed2)  
    
 return   
    
  }
      
  var s = [
"(XQ2iAHq",
"]4sk3.,[",
"@h13q/?y",
"*3A;ZN/[",
"(w6+3me",
"[AzUs!vx",
"[969oK&!",
"/jx]Wvae",
"?taKx0rS",
"7b1H0+y",
"!c4e[Q*w",
"=iCMp9_-",
"[KrqjC6]",
"]PfL5-#[",
"-xG8E\&2",
"\qmVgzic",
")xKKLF@L",
"[d1DBnhj",
"]Cvb90E0",
":A1sG_%9",
"#sOW*Xgh",
"#8WXjfVf",
"=XJ6znz=",
"_FrvMM@7",
")ca58PTa",
"(MY;e?/.",
"'53wSHGQ",
";ZkBm#(7",
"_Y6BVRp3",
"&LnyTO16",
"@2ZY6edQ",
"'ML4X%*,",
"/8Mnv$mP",
"(2uagC/N",
".XcLLsre",
"-K6Vp9Qi",
"#HYsi;3e",
";PzP@M%r",
"_CzW:viy",
"@sOyV[(U",
",WXNzvRw",
")g6ZcT+W",
"]zwb8T2n",
"&k7Q1Oa@",
"@QOaqP-4",,
"%Pe!VB]h",
"]6G7(XH3",
"@5E&MJ=5",
"@4T6O&*k",
"_jXcUM!J",

     
];
  


  
  var sifre = s[Math.floor((Math.random() * s.length))];
var embed20 = new Discord.MessageEmbed()
      .setTitle(message.member.user.username + ' Kullanıcı Giriş Şifreniz:')
     .setDescription('**' + sifre + '**')
    .setFooter('sizi bekliyorum...')
    .setColor("GREEN")
message.member.send(embed20)
var embed2 = new Discord.MessageEmbed()
      .setTitle('Hoşgeldin! **' + message.member.name + '**')
     .setDescription('Panel **Giriş Şifrenizi** Özelden Yolladım! Bulunduğunuz kanala  bu şifreyi **20 saniye** içinde Atın!')
    .setFooter('sizi bekliyorum...')
    .setColor("GREEN")
message.channel.send(embed2)
.then(async () => {
    message.channel.awaitMessages(filter, {
    max: 1,
    time: 20000
  }).then(async (collected) => {
   if (collected.first().content === sifre) { 
         const embed4 = new Discord.MessageEmbed()
      .setTitle('Başarılı!')
     .setDescription('Ranger BOT **Panel Giriş** Bilgilerinizi özelden yolladım!')
    .setFooter('okey..')
             .setColor("GREEN")
 message.channel.send(embed4)
     
     return
   } 
      message.channel.send('**Giriş Şifresi Yanlış!** \n Tekrar Deneyiniz...')
  
})
})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'panel',
  description: 'bot panel',
  usage: 'panel'
};