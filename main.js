const fs = require('fs');
const config = require('./config.json');
const NodeCache = require( "node-cache" );

// Connection Init
const cache = new NodeCache();
const connection = require('./db.js').init(config.db);
require('./models/init-models.js')(connection);

// Client Init

const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.prefix = config.prefix;
client.connection = connection;
client.commands = new Collection();
client.buttons = new Collection();
client.models = {};

// Events Init

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);

    if (event.once) {
        client.once(event.name, async (...args) => await event.execute(client, cache, ...args));
    } else {
        client.on(event.name, async (...args) => await event.execute(client, cache, ...args));
    }
}

// Commands Init

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Buttons Init

const buttonCommandFolders = fs.readdirSync('./commands/buttons').filter(file => fs.statSync('./commands/buttons/' + file).isDirectory());
for (const folder of buttonCommandFolders) {
    const buttonCommandFiles = fs.readdirSync('./commands/buttons/' + folder).filter(file => file.endsWith('.js'));
    var buttons = new Collection();
    for (const file of buttonCommandFiles) {
        const button = require(`./commands/buttons/${folder}/${file}`);
        buttons.set(button.name, button);
    }

    client.buttons.set(folder, buttons);
}

client.login(config.token);
