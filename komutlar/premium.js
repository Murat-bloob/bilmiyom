const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
    var gold = args[0]
  var id = "600442189834616842"
  if (!gold) return message.channel.send(" **ver** veya **al** Yazmalısın!")
if(message.mentions.users.first()){
    var ID = message.mentions.users.first()
  const guye = await db.fetch(`gold_${ID.id}`)

    if (gold === 'ver') {
        if(guye) return message.reply(`Bu kullanıcı Zaten Premium!`)

    db.delete(`gold_${ID.id}`)
   
 db.set(`gold_${ID.id}`, "ver")
  message.channel.send('Başarılı!`' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık \`Premium Üye\``)
    client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcıya Gold Üye **Verildi!**`)
  }
  if (gold === 'al') {
    if(!guye) return message.reply(`Bu Üye Zaten Gold Üye Değil`)
    db.delete(`gold_${ID.id}`)
 message.channel.send('Başarılı `' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık \`Premium\` Degil`)
     client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcın Premium Üyeliği **Alındı**`)
  }
}else if(client.users.cache.get(args[1])){
    var ID = client.users.cache.get(args[1])
 
    if (gold === 'ver') {
      const guye = await db.fetch(`gold_${ID.id}`)
      if(guye) return message.reply(`Bu Üye Zaten Gold Üye`)
      db.delete(`gold_${ID.id}`)
   db.set(`gold_${ID.id}`, "ver")
 message.channel.send('Başarılı `' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık Premium Üye!`)
     client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcıya Premium Üyeli **Verildi!**`)
    }

    if (gold === 'al') {
      const guye = await db.fetch(`gold_${ID.id}`)
      if(!guye) return message.reply(`Bu Üye Zaten Gold Üye Degil`)
      db.delete(`gold_${ID.id}`)
 message.channel.send('Başarılı `' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık Premium Üye Değil`)
      client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcının Premium Üyeliği **Alındı**`)
    }  
}else if(!isNaN(args[2])){
    var ID = args[2]
 
    if (gold === 'ver') {
      const guye = await db.fetch(`gold_${ID.id}`)
      if(guye) return message.reply(`Bu Üye Zaten Gold Üye`)
      db.delete(`gold_${ID}`)
   db.set(`gold_${ID}`, "ver")
   message.channel.send('Başarılı `' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık Premium Üye!`)
      client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcıya Premium Üye **Verildi!**`)
    }
 
    if (gold === 'al') {
      const guye = await db.fetch(`gold_${ID.id}`)
       if(!guye) return message.reply(`Bu Üye Zaten Gold Üye Degil`)
      db.delete(`gold_${ID}`)
  message.channel.send('Başarılı `' + ID.tag + "` - `" + ID.id + `\` ID'ine Sahip Kullanıcı Artık Premium Üye Değil`)
     client.channels.cache.get(id).send("Başarıyla `" + ID.tag + "` - `" + ID.id + `\` Adlı Kullanıcının Premium Üyeliği **Alındi**`)
    }  
}else{
    message.reply("Id Yazmalisin!")
}
  
  
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['elma'],
  permLevel: 0
};

exports.help = {
  name: 'elma',
  description: 'taslak',
  usage: 'elma'
};