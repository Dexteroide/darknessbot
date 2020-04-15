exports.run = (client, message, args) => {
    console.log(message.author.tag, "used the info command");
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
  embed.setAuthor("vibe check")
  embed.setDescription("no")
  embed.setColor(0x00AE86)
  embed.addField("Server developer:", "Yuichiro#0001")
  embed.setTimestamp()
  embed.setFooter("meme-BOT")
  message.channel.send(embed);
};