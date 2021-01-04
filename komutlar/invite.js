const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davet bulunamadı!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.MessageEmbed()
        .setTitle(`**Bux Place** Davet sıralaması!`)
        .setColor(0xCB5A5E)
        .addField('Sıralama', `${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası"],
  permLevel: 0,
  kategori: "sunucu",

};

exports.help = {
  name: 'invite',
  description: 'Sunucunuza en çok kullanıcı getirenleri sıralar.',
  usage: 'invite',
 
};