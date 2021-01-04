const Discord = require('discord.js')


exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.cache.get('📞');
const emoji2 = message.client.emojis.cache.get('📞');
const emoji3 = message.client.emojis.cache.get('📞');
const emoji4 = message.client.emojis.cache.get('📞');
const emoji5 = message.client.emojis.cache.get('📞');
const emoji6 = message.client.emojis.cache.get('📞');
const emoji7 = message.client.emojis.cache.get('📞');
      let isEnabled;
      message.reply("Ranger BOT Destek ekibine haber verildi! Destek Ekibi birazdan sizinle iletişime geçicektir.");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "601381229815791654";
      const embed = new Discord.MessageEmbed()
        .setTitle('Ranger BOT - Destek Çağrısı')
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL()}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.cache.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.cache.get(destekKanal).createMessageCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.cache.get(destekKanal).send('**Destek Çağrısına** Bağlanmak için ```katıl``` İptal etmek için ```kapat``` Yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('Çağrı Zaman aşımına Uğradı!')
      if (reason === 'aborted') {
        message.reply('**Destek Çağrınız** Yetkililer tarafından Kapatıldı!')
        client.channels.cache.get(destekKanal).send('Destek Çağrısı başarıyla iptal Edildi!')
      }
      if (reason === 'success') {
        client.channels.cache.get(destekKanal).send('📞 Destek çagrısı alındı!')
        client.channels.cache.get(destekKanal).send('📞 Destek çağrısını kapatmak için `kapat` yazınız.')
        chan.send(`${message.author}`)
        chan.send('Destek Çağrınız,Destek Ekibi tarafından Alındı!')
        chan.send('En Yakın Zamanda Size Yardımcı Olacagız.')
        chan.send('Destek çagrısı kapatmak için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('📞 Çağrı Kapatıldı.')
              if (message.channel.id === chan.id) client.channels.cache.get(destekKanal).send('📞 Çağrı karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) chan.send('📞 Çağrı karşı taraftan kapatıldı.')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.cache.get(destekKanal).send(`📞 **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`📞 **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};