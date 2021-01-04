const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.MessageEmbed()
        .setColor("GREEN")
       .addField("Anlık Ping", `${client.ws.ping.toFixed()} **ms**`)
        .addField("Merkez Bilgileri", `**Güncelleme Merkezi**: Glitch`)
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(embedyardim);
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["pong","gecikme","servis"],
    permLevel: 0
};

exports.help = {
    name: 'ping',
};