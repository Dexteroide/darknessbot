const config = require("./config.json");
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token:(config.TOKEN)});

manager.spawn();
manager.on('launch', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));