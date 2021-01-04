const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
      var embed2 = new Discord.MessageEmbed()   
      .setTitle('Ranger BOT Linkler:')
      .addField(" <a:sabitle:600298981205082125> Ranger BOT Destek Sunucusu :",  '[Tıkla!](https://discord.gg/kRV8aK4)')
      .addField(" <a:davet:601346589876944899> Ranger BOT Davet Linki :",  '[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=599654738140856324&scope=bot&permissions=2146958847)') 
      .addField(" <a:bits:601342956875808788> Ranger BOT WebSite :",  '[Tıkla!](https://rangerbot-web.glitch.me/index.html)') 
      .addField(" <a:yess:602116858879148032> Ranger DBL Profili :",  '[Tıkla!](https://discordbots.org/bot/599654738140856324)') 
      .setThumbnail('https://images-ext-1.discordapp.net/external/1HWmh7Fjts98L9UPeNJ1UMGnykfnA4pkobQ9SmTz_jE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/599654738140856324/b847dbd5534d2e785b0fa12dfcf40260.png?width=473&height=473')
      .setColor('FBFF00')
      message.channel.send(embed2);  
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'bot davet',
  usage: 'davet'
};