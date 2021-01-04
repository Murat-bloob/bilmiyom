const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
client.queue = new Map()
const chalk = require('chalk');
const fs = require('fs');
let kufurEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));
const Jimp = require('jimp');
const db = require('quick.db');
const moment = require('moment');
require('./util/eventLoader')(client);

///////////
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200)
  //response.send(path.join(__dirname+'/index.html'))
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://placebot.glitch.me/`);
}, 10000);
///////////

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

////////////////////////////////////////////////////
client.on('message', async msg => {
 if(msg.author.bot) return;
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === `${ozelkomutYazi}`) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});
///////////////////////////////////////
client.on("message", async message => {
  const i = await db.fetch(`gold_${message.member.id}`);
  
    if (i == 'ver') {
      
    if(message.content.toLowerCase() == 'sa' || message.content.toLowerCase() == 'hg' || message.content.toLowerCase() == 'selam' || message.content.toLowerCase() == 's.a' || message.content.toLowerCase() == 'selamun aleyküm' || message.content.toLowerCase() == 'slm' || message.content.toLowerCase() == 'naber') {

let test = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(' <a:bits:601342956875808788> Hizzaya Geçin!')
.addField("**Kralınız**;",  message.member.user.username + ' Adlı  bir **Premium Üye!** <a:cldrkopek:601461983094767649> ') 
.setThumbnail('https://cdn.dribbble.com/users/1217613/screenshots/3866398/4.gif')
message.channel.send(test).then(m => m.delete(10000))
}            else if (i == 'al') {
      
    }
    if (!i) return
    }})


///////////////////////////////
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dm = new Discord.MessageEmbed()
         .setTitle(`${client.user.username} - Dm Mesaj`)
         .setColor("#7289DA")
         .addField(`Mesajı Gönderen`,message.author.tag)
         .addField(`Gönderilen Mesaj`,message.content)
         .setThumbnail(message.author.avatarURL()) 
    client.channels.cache.get("599599485705912361").send(dm);
    }
});
//////////////////////////////////////////////////////////////////////////pre


///////////////////////////////////////////////////////////////////////////////////

client.on("message", async msg => {
  
  
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('Aleyküm Selam, Hoşgeldin!')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
      
    }
    if (!i) return;
  
    });
////////////////////////////////////////////////////////////////////////////////küfür
client.on("message", msg => {
  if (!msg.guild) return;
  if (!kufurEngel[msg.guild.id]) return;
  if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
    if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
      const kufur = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
         var e = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Link Engeli!")
        .setDescription(msg.guild.name + ' Sunucusunda **Ranger BOT** Küfür Koruması Aktif! Link Atamassın!')
      msg.channel.send(e).then(message => message.delete(3000));
    }
}
    }
});
/////////////////////////////////////////////////////////////////////////////otorol
client.on("guildMemberAdd", async member => {
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let embed = new Discord.MessageEmbed()
    .setTitle('Otorol Sistemi')
    .setDescription(` @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
    .setFooter("Harmony ", client.user.avatarURL());

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.cache.get(member.guild.id).channels.cache.get(giriscikiskanalID);
    giriscikiskanali.send(`:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
  } catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e)
  }

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.roles.add(role)
});





///////////////////////////////////////////////////////////////////////////reklam
let linkEngel = JSON.parse(fs.readFileSync("././jsonlar/linkEngelle.json", "utf8"));

client.on("message", msg => { 
  if (!linkEngel[msg.guild]) return;
if (linkEngel[msg.guild.id].linkEngel === "kapali") return;
    if (linkEngel[msg.guild.id].linkEngel === "acik") {
    var regex = new RegExp(/(discord.gg|http|.gg|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram|youtube.com)/)
    if (regex.test(msg.content)== true) {
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
      msg.delete()
       msg.channel.send(`<@${msg.author.id}>`).then(message => message.delete(5000));
        var e = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor("Link Engeli!")
        .setDescription(msg.guild.name + ' Sunucusunda **Ranger BOT** Link engeli Aktif! Link Atamassın!')
        msg.channel.send(e).then(message => message.delete(5000));
    }
}
    }
});
//////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////otorol
client.on ('message', message => {
 let prefix = require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.content === '<@599654738140856324>') {
  const embed = new Discord.MessageEmbed()
  .setTitle('**Selam!**')
  .setDescription('Merhaba ' + message.member.user.username + ', işte **' + message.guild.name + '** Sunucusunda ki Bilgilerim; \n Prefixim **' + prefix + '** \n **' + message.guild.name + '** Sunucu İD si; ' + message.guild.id + ' ')

  .setColor('BLUE')
 message.channel.send(embed)
.then(msg => msg.delete(10000));
}
});
///////////////////////////////////////////////////////////////////////////////////////virüs


//////////////////////////////////////////////////////////////////////////7
client.on('guildBanAdd', async (guild, member) => {
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
  
  const hgK = member.guild.channels.cache.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
   const embed = new Discord.MessageEmbed()
			.setTitle('Üye yasaklandı.')
			.setAuthor(member.user.tag, member.user.avatarURL())
			.setColor('RANDOM')
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL())
			.setFooter(`Ranger BOT Log Sistemi | ID: ${member.user.id}`)
			.setTimestamp();
			hgK.send({embed});

		
	})
	
client.on('guildBanRemove', async (guild, member) => {
		    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
  
  const hgK = member.guild.channels.cache.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
			var embed = new Discord.MessageEmbed()
			.setTitle('Üyenin yasaklaması kaldırıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL())
			.setColor('RANDOM')
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL())
			.setTimestamp();
			hgK.send({embed});
		
	})
	
client.on('messageDelete', async msg => {
	  if(msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;
  if (!msg.guild) return;
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
  
  const hgK = msg.guild.channels.cache.get(gc[msg.guild.id].gkanal)
    if (!hgK) return;
			var embed = new Discord.MessageEmbed()
			.setAuthor(msg.author.tag, msg.author.avatarURL())
      .setTitle('Mesaj Silindi!')
      .addField("Kullanıcı:", `<@!${msg.author.id}>`)
      .addField("Kanal:", `<#${msg.channel.id}>`)
      .addField("Mesaj:", `${msg.content}`)
			.setFooter('Ranger BOT - Log sistemi')
			hgK.send({embed});
		
	})


client.on('messageUpdate', async (oldMessage, newMessage) => {
 if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }

    if (!oldMessage || !oldMessage.id || !oldMessage.content || !oldMessage.guild) return;
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
  const hgK = oldMessage.guild.channels.cache.get(gc[oldMessage.guild.id].gkanal)
  let embed = new Discord.MessageEmbed()
        .setColor("#0080ff")
        .setAuthor(`Mesaj Güncellendi!`)
        .setThumbnail(oldMessage.author.avatarURL())
        .addField("Gönderen", oldMessage.author.tag, true)
        .addField("Önceki Mesaj", `\`\`\`${oldMessage.content}\`\`\``, true)
        .addField("Şimdiki Mesaj", `\`\`\`${newMessage.content}\`\`\``, true)
        .addField("Kanal", newMessage.channel.name, true)
.setFooter('Ranger BOT - Log sistemi')
  hgK.send({embed});
})




client.on('channelCreate', async channel => {
		if (!channel.guild) return;
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./log.json", "utf8"));
  
  const hgK = channel.guild.channels.cache.get(gc[channel.guild.id].gkanal)
    if (!hgK) return;
		
			if (channel.type === "text") {
client.channels.cache.get("599952433292115979").setName(`Kanal Sayısı: ${client.channels.size}`)
        var embed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setAuthor(channel.guild.name, channel.guild.iconURL())
				.setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
				hgK.send({embed});
			};
			if (channel.type === "voice") {
client.channels.cache.get("599952433292115979").setName(`Kanal Sayısı: ${client.channels.size}`)
        var embed = new Discord.MessageEmbed()
					.setColor('RANDOM')
				.setAuthor(channel.guild.name, channel.guild.iconURL())
				.setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
				hgK.send({embed});
			}
		
	})


/////////////////////////////////////////////////////////////////////////////////////////afk
client.on("message", message => {
  
    let afk_kullanici = message.mentions.users.first() || message.author;
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; //
  if (message.author.bot === true) return;
   


  if (message.author.bot === true) return;
     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.MessageEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.cache.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
                 
         }
   
         if(db.has(`afks_${message.author.id}`)) {
             const basarili = new Discord.MessageEmbed()
                 .setColor("RANDOM")
                 .setDescription("<@"+`${message.author.id}`+">"+" Başarıyla AFK modundan çıktın")
             message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });


/////////////////////////////////////
setInterval(() => {
  client.channels.cache.get("599952337963843594").setName(`🔥 SUNUCU: ${client.guilds.cache.size}`)
}, 60000)

setInterval(() => {
  client.channels.cache.get("599952382385717258").setName(`📂 KANAL: ${client.channels.size}`)
}, 60000)

setInterval(() => {
  client.channels.cache.get("599993275545550848").setName(`👤 Kullanıcı: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`)
}, 60000)
/////////////////////////////////////////////////////
client.on("message", async message => {
  
  if(message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  
  var id = message.author.id;
  var gid = message.guild.id;
  
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  
  
  if(!lvl) {
    
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    
  } else {
    
    var random = Math.random() * (8 - 3) + 3;
    db.add(`xp_${id}_${gid}`, random.toFixed());
    console.log(xp);
    
    if(xp > xpToLvl) {
      
      db.add(`lvl_${id}_${gid}`, 1)
      db.add(`xpToLvl_${id}_${gid}`, await db.fetch(`lvl_${id}_${gid}`) * 100);
      var lvl = await db.fetch(`lvl_${id}_${gid}`);
      message.channel.send(message.author + ". Seviye atladın! Artık **" + lvl + ".seviyesin.**");
      var role = message.guild.roles.cache.get(await db.fetch(`role_${gid}_${lvl}seviye`));
      if(!role) return;
      else {
        message.member.roles.add(role);
        message.channel.send('Tebriler! ' + message.guild.name + ' Sunucusunda** ' + lvl + '**.seviye Olarak @' + role.name + ' Adında ki rolü Kazandınız!');
      }
      
    }
    
  }
  
  
  
});




////////////////////////////////////////////////////// sunucu hg bb
client.on("guildCreate", guild => {

let add = client.channels.cache.get("599763523161030660")
const eklendim = new Discord.MessageEmbed()
.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL())
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)
add.send(eklendim)

});

client.on("guildDelete", guild => {
let remove = client.channels.cache.get("599763523161030660")
const atildim = new Discord.MessageEmbed()

.setTitle(`Sunucudan Atıldım`)
.setTimestamp()
.setColor("RED")
.setThumbnail(guild.iconURL())
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

remove.send(atildim)

});

//////////////////////////////////////////////////////MÜZİK

/////////////////////////////////////////////////////////7
client.on('message', msg => {

if (!msg.content.startsWith(prefix)) {
    return;
  }

  });


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);