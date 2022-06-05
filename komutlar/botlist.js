const discord = require("discord.js");
const db = require("croxydb");

exports.run = async (client, message, args) => {
  let blue = new discord.MessageEmbed().setColor("BLUE");
  let red = new discord.MessageEmbed().setColor("RED");
  if(!message.member.hasPermission('ADMINISTRATOR')) {
    return message.channel.send(
      red.setDescription("<a:adikkat:974006925249376338>・Bu Komutu Kullanabilmek İçin ``Yönetici`` Yetkisinde Olman Lazım")
    );
  }
  let arg = args[0];
  if (!arg) {
    return message.channel.send(
      red.setDescription(
        "<a:adikkat:974006925249376338>・Girebileceğin Argümanlar: `bot-ekle-kanal` **|** `bot-log-kanal` **|** `onay-red-log-kanal` **|** `bot-yetkili-rol` **|** `sıfırla`"
      )
    );
  } else if (arg == "bot-ekle-kanal") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      return message.channel.send(
        red.setDescription(
          "<a:adikkat:974006925249376338>・Geçerli Bir Kanal Etiketlemen Gerek: **#kanal**"
        )
      );
    }
    db.set(`bot.ekle.log.${message.guild.id}`, kanal.id);
    return message.channel.send(
      blue.setDescription(
        "<a:atik:981936970710286436>・Bot Ekleme Kanalı Ayarlandı: <#" +
          kanal +
          ">"
      )
    );
  } else if (arg == "bot-log-kanal") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      return message.channel.send(
        red.setDescription(
          "<a:adikkat:974006925249376338>・Geçerli Bir Kanal Etiketlemen Gerek: **#kanal**"
        )
      );
    }
    db.set(`bot.log.${message.guild.id}`, kanal.id);
    return message.channel.send(
      blue.setDescription(
        "<a:atik:981936970710286436>・Bot Log Kanalı Ayarlandı: <#" + kanal + ">"
      )
    );
  } else if (arg == "onay-red-log-kanal") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      return message.channel.send(
        red.setDescription(
          "<a:adikkat:974006925249376338>・Geçerli Bir Kanal Etiketlemen Gerek: **#kanal**"
        )
      );
    }
    db.set(`onay.red.log.${message.guild.id}`, kanal.id);
    return message.channel.send(
      blue.setDescription(
        "<a:atik:981936970710286436>・Onay - Red İçin Log Kanalı Ayarlandı: <#" + kanal + ">"
      )
    );
  } else if (arg == "bot-yetkili-rol") {
    let rol = message.mentions.roles.first();
    if (!rol) {
      return message.channel.send(
        red.setDescription(
          "<a:adikkat:974006925249376338>・Geçerli Bir Rol Etiketlemen Gerek: **@rol**"
        )
      );
    }
    db.set(`bot.yetkili.rol.${message.guild.id}`, rol.id);
    return message.channel.send(
      blue.setDescription(
        "<a:atik:981936970710286436>・``Bot Yetkilisi`` Rolü Ayarlandı: <@&" +
          rol +
          ">"
      )
    );
  } else if (arg == "bot-yetkili-rol") {
    db.delete(`bot.yetkili.rol.${message.guild.id}`);
    db.delete(`onay.red.log.${message.guild.id}`);
    db.delete(`bot.log.${message.guild.id}`);
    db.delete(`bot.ekle.log.${message.guild.id}`);
    return message.channel.send(
      blue.setDescription(
        "<a:atik:981936970710286436>・Bot List Verileri Sıfırlandı"
      )
    );
};
exports.help = {
name: "botlist" 
}
}










//Discord: ArviS#0011
//Discord Sunucum: https://discord.gg/strangerthingstr

//İnstagram: @arvis_here