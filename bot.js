const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const fs = require("fs");
const Enmap = require("enmap");
const config = require('./config.json');
const moment = require('moment');
const RegExp = require("regexp")

client.config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();
client.aliases = new Enmap();
client.settings = new Enmap({name: "settings"});

fs.readdir("./commands/usercommands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/usercommands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/admincommands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admincommands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

const init = async () => {

const evtFiles = await readdir("./events/");
client.logger.log(`Loading a total of ${evtFiles.length} events.`);
evtFiles.forEach(file => {
  const eventName = file.split(".")[0];
  client.logger.log(`Loading Event: ${eventName}`);
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
});
};


client.on('message', message => {
  if (message.content.startsWith(config.PREFIX + 'invite')) {
    message.channel.send('Invite me using this link: https://discordapp.com/oauth2/authorize?client_id=504405249419902977&scope=bot&permissions=8')
    }
  });


client.on('message', message => {
  if (message.author.id == client.user.id) return;
  if (message.mentions.users.first() 
  && message.mentions.users.first().id == client.user.id) {
    message.reply(`Hello! My prefix is \`${config.PREFIX}\`, type \`${config.PREFIX}help\` to see a list of commands.`);
    }
  });

 client.login(config.TOKEN);   