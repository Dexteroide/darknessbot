const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let uEmbed = new Discord.RichEmbed()
    .setColor()
    .setTitle("User Info")
    .setThumbnail(message.author.displayAvatarURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .setTimestamp()
    .setFooter(`darkness`, bot.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}