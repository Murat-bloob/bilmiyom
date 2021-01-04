const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`Bu sunucu da prefix zaten ayarlanmamış!`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Prefix başarıyla sıfırlandı. Mevcut prefix \`r!\``)
    return
  }
  
  if (!args[0])
    return message.channel.send(`Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send('Başarılı! Artık ' + message.guild.name + ' Sunucusunda ki Prefixim** "' + args[0] + '" **!')
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    permLevel: 0
};
  
  exports.help = {
    name: 'prefix',
    description: 'prefix ayarlamak',
    usage: 'prefix <prefix>'
};