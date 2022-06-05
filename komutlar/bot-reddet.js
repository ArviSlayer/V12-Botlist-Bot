const discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  let onayred = db.fetch(`onay-red.log.${message.guild.id}`);
  if(!onayred) return message.inlineReply("<a:adikkat:974006925249376338>・``Onay - Red`` İçin Log Kanalı Ayarlı Değil")
  let yetkili = db.fetch(`bot.yetkili.rol.${message.guild.id}`);
  if(!yetkili) return message.inlineReply("<a:adikkat:974006925249376338>・``Bot Yetkilisi`` Rolü Ayarlı Değil")
  if(!message.member.roles.cache.has(yetkili)) return message.reply("<a:adikkat:974006925249376338>・Bu Komutu Kullanabilmek İçin ``Bot Yetkilisi`` Rolünde Olman Lazım")
  let botid = args[0];
  if(!botid) return message.inlineReply("<a:adikkat:974006925249376338>・Lütfen Bir ``Bot ID``si Gir")
  let sebep = args.slice(1).join(" ");
  if(!sebep) return message.inlineReply("<a:adikkat:974006925249376338>・Botu Reddetmek İçin Bir Sebep Gir")
  let botvaryok = db.fetch(`bot.id.${botid}`)
  if(botid) {
    if(!botvaryok) {
      return message.inlineReply(`<a:hatali:972595953448144997>・Sistemde Böyle Bir Bot Bulunmuyor`)
    } else {
      if(client.channels.cache.get(onayred).send(`<a:hatali:972595953448144997>・<@${botid}> İsimli Bot <@${message.author.id}> Adlı Yetkili Tarafından Reddedildi \n <:adsnendiscord:973979664114651179>・Sebep: **${sebep}**`));
      message.inlineReply(`<a:hatali:972595953448144997>・<@${botid}> İsimli Bot Reddedildi`)
      db.delete(`bot.id.${botid}`)
      db.subtract(`serverData.${message.guild.id}.waitSize`, 1)
    }
  }
};
exports.help = {
name: "bot-reddet" 
} 










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here