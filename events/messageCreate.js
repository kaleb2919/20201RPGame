const utils = require.main.require('./utils.js');

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, cache, message) {
        if (!client.application?.owner)
            await client.application?.fetch();

        if (!utils.userEqual(message.author, client.user)) {
            var [command, args] = utils.parseMassage(message.content.toLowerCase(), client.prefix);
            if (command == 'deploy') {
                var oa2guilds = await client.guilds.fetch();

                await oa2guilds.each(async (oa2guild) => {
                    var guild = client.guilds.cache.get(oa2guild.id);
                    guild.commands.set([]);
                    guild.commands.set(Array.from(client.commands, ([name, command]) => (command)));
                });

                return message.reply({ content: `Deploy completed!\n>>> ${client.commands.map((e) => e.name)}`, ephemeral: true });
            }
        }
    }
};