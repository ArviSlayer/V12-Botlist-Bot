const discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
 let blue = new discord.MessageEmbed().setColor("BLUE");
  let botlog = db.fetch(`bot.log.${message.guild.id}`);
let sira = db.fetch(`serverData.${message.guild.id}.waitSize`) || 0;
  if(!botlog) return message.inlineReply('<a:adikkat:974006925249376338>・``Onay - Red`` İçin Log Kanalı Ayarlı Değil')
  let basvuru = db.fetch(`bot.ekle.log.${message.guild.id}`);
  if(!basvuru) return message.inlineReply('<a:adikkat:974006925249376338>・``Bot Ekleme`` Kanalı Ayarlı Değil')
  if(message.channel.id !== basvuru) return message.reply(' Lütfen Bunu <#'+basvuru+'> Kanalında Dene')
  let botid = args[0];
  let botprefix = args[1];
  if(!botid) return message.inlineReply('<a:adikkat:974006925249376338>・Lütfen Bir ``Bot ID``si Gir')
  if(!botprefix) return message.inlineReply('<a:adikkat:974006925249376338>・Lütfen Bir ``Bot Prefix``i Gir')
  let embed = new discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
  .addField("<:adiscord:980452011210338355>・Bot ID", botid, true)
  .addField("<:adiscord:980452011210338355>・Bot ID", botprefix, true)
  .addField("<:adiscord:980452011210338355>・Bot Davet", "<a:asabitle:980445858367692881>・Davet: [0 Perm](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) **|** [8 Perm](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)") 
  .setColor("BLUE")
  .setFooter("BOTUNUZUN ADI")
  let botvaryok = db.fetch(`bot.id.${botid}`)
  if(botid) {
    if(botprefix) {
      if(botvaryok) {
        message.inlineReply('<a:hatali:972595953448144997>・Bu Bot Zaten Sistemde Bulunuyor')
      } else {
      if(message.channel.id !== basvuru) return message.reply('<a:hatali:972595953448144997>・Lütfen <#${başvuru}> Kanalında BotU Ekle')
      if(client.channels.cache.get(basvuru).send(embed));
      if(client.channels.cache.get(botlog).send(blue.setDescription(`<a:atik:981936970710286436>・Bir Bot Eklendi:
<:adiscord:980452011210338355>・Bot: ${botid} **|** <@${botid}>
<:adiscord:980452011210338355>・Botun Sahibi: ${message.author}
<:adiscord:980452011210338355>・Sıra Sayısı: ${sira}
<:adiscord:980452011210338355>・Davet: [0 Perm](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) **|** [8 Perm](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)));
      message.inlineReply('<:codesty_check:844468545877442560> Bot ekleme isteğin alındı!')
      db.set(`bot.id.${botid}`, 'yes')
      db.add(`serverData.${message.guild.id}.waitSize`, 1)
      };
    };
  };
};
exports.help = {
name: "bot-ekle" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here