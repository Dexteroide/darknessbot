exports.run = (client, message, args) => {
    console.log(message.author.tag, "used the help command");
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
  embed.setTitle("Bot commands")
  embed.setThumbnail("https://cdn.discordapp.com/avatars/504405249419902977/ab8b4e639448f60afb9b59c24c3e2eab.png?size=256")
  embed.setAuthor("darkness")
  embed.setColor(0x00AE86)
  embed.addField("Owner Commands", "eval, reload, yeet, createrole")
  embed.addField("User commands", "cat, dog, info, meme, ping, say, serverinfo, stats, userinfo")
  embed.setTimestamp()
  embed.setFooter("darkness")
  message.channel.send({embed});
};