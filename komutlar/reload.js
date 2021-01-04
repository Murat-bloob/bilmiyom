const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
 if(message.author.id !== "419214688061227009") return message.reply(`bu komutu sadece Sahibim Kullanabilir!`);

  let command;
  if (client.commands.has(args.slice(0).join(' '))) {
    command = args.slice(0).join(' ');
  } else if (client.aliases.has(args.slice(0).join(' '))) {
    command = client.aliases.get(args.slice(0).join(' '));
  }
  if (!args[0]) return message.reply("Bir komut ismi yazmalısın!")
  if (!command) {
    return message.reply("Botta `" + args.slice(0).join(' ') + "` isminde bir komut bulunmuyor!");
  } else {
    message.channel.send("`" + command + "` ismindeki komut yeniden başlatılıyor...")
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit("`" + command + "` ismindeki komut başarıyla yeniden başlatıldı!");
          })
          .catch(e => {
            m.edit(`Komutlar klasöründe \`${command}.js\` isminde bir dosya bulunamadı!`);
          });
      });
  }
    
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'reload',
    description: 'Belirtilen bir komutu yeniden başlatır.',
    usage: 'reload <komut adı>',
}