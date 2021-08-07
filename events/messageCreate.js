const utils = require('../utils.js');
const config = require('../config.json');

module.exports = {
	name: 'messageCreate',
	once: false,
	async execute(message, client) {
		if (!client.application?.owner)
            await client.application?.fetch();
        
        if (!utils.userEqual(message.author, client.user)) {
            console.log(`Входящее сообщение: ${message.content}`);
            var [command, args] = utils.parseMassage(message.content.toLowerCase(), config.prefix);
            
            if (command == 'deploy') {
                await client.guilds.cache.get(message.guild.id)?.commands.set(client.commands);
                await client.application?.commands.set(client.commands);
            }
        }
	}
};