exports.run  = (client, message, [mention, ...reason]) => {
    console.log(message.author.tag, 'used the ping command');     
        message.channel.send(`My ping is: ${client.ping} ms`);
};
