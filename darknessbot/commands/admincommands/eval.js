exports.run = async (client, message, args) => {
    if (message.author.id !== '286484126175985664') return;
    try {
        const code = args.join(" ");
        let evaled = eval(code);
        if (evaled instanceof Promise) evaled = await evaled
        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(clean(evaled), {
            code: "xl"
        }).catch(console.error);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};

const clean = text => {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}