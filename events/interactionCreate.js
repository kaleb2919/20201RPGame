const {  MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');

const locale = require.main.require('./locale.js');
const utils = require.main.require('./utils.js');

module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, cache, interaction) {
        if (!interaction.isCommand() && !interaction.isButton()) return;

        if (interaction.commandName) {
            console.log('Command:', interaction.commandName, ' User:', interaction.member.id);
        }

        if (interaction.customId) {
            console.log('Button:', interaction.customId, ' User:', interaction.member.id);
        }

        var command;
        if (interaction.isCommand()) {
            if (!interaction.client.commands.has(interaction.commandName)) {
                return await interaction.reply({ content: locale.actionDenied + ': command not found', ephemeral: true });
            }

            command = interaction.client.commands.get(interaction.commandName);
        }

        if (interaction.isButton()) {
            var button_parts = interaction.customId.split('.')
            if (!interaction.client.buttons.has(button_parts[0])) {
                return await interaction.reply({ content: locale.actionDenied + ': button not found', ephemeral: true });
            }

            var category = interaction.client.buttons.get(button_parts[0]);

            if (!category.has(button_parts[1])) {
                return await interaction.reply({ content: locale.actionDenied + ': action not found', ephemeral: true });
            }

            command = category.get(button_parts[1]);

            interaction.category = button_parts[0];

            if (button_parts[2] != interaction.member.id) {
                return await interaction.reply({ content: locale.actionDenied + ': wrong user', ephemeral: true });
            }
        }

        let discord_user = cache.get("discord_user_" + interaction.member.id);

        if (discord_user === undefined) {
            discord_user = await interaction.client.connection.models
                .t_discord_user.findOne({
                    where: {
                        id_discord: interaction.member.id,
                    }
                });

            cache.set("discord_user_" + interaction.member.id, discord_user, 60*60);
        }

        if (discord_user === null) {
            discord_user = await interaction.client.connection.models
                .t_discord_user.create({
                    id_discord: interaction.member.id,
                });
        }

        let character = await interaction.client.connection.models
            .t_character.findOne({
                where: {
                    id_discord_user: discord_user.id,
                    c_alive: 1,
                }
            });

        if (character === null && command.name != 'start') {
            return await interaction.reply({ content: locale.characterNotFound, ephemeral: true });
        }

        let action;
        if (character) {
            if (interaction.isButton()) {
                action = await interaction.client.connection.models
                    .t_action.findOne({
                        where: {
                            id_character: character.id,
                            c_status: 0,
                            c_category: interaction.category
                        }
                    });
            } else {
                action = await interaction.client.connection.models
                    .t_action.findOne({
                        where: {
                            id_character: character.id,
                            c_status: 0
                        }
                    });
            }
        }

        if (action && !utils.isAvailableCommandInAction(command.name, action.id_type)) {
            return await interaction.reply({ content: locale.actionBusyMessage[action.id_type], ephemeral: true });
        }

        try {
            var params = await command.execute(interaction, {
                isButton: interaction.isButton(),
                character: character,
                discord_user: discord_user,
                action: action,
                cache: cache
            });

            var body = {
                content: ``,
                components: [],
                files: [],
                ephemeral: false,
            };

            if (params.buttons) {
                var rows = new MessageActionRow();
                params.buttons.forEach(button => {
                    rows.addComponents(
                        new MessageButton()
                            .setCustomId(button.id + '.' + discord_user.id_discord)
                            .setLabel(button.label)
                            .setStyle(button.style)
                    );
                });

                body.components.push(rows);
            }

            if (params.image) {
                body.files.push(new MessageAttachment(params.image, 'image.jpg'));
            }

            if (params.ephemeral) {
                body.ephemeral = true;
            }

            if (params.message) {
                body.content = params.message;
            }

            if (params.update) {
                interaction.message.removeAttachments();
                return await interaction.update(body);
            } else {
                return await interaction.reply(body);
            }
        } catch (error) {
            console.error(error);
            return await interaction.reply({ content: `Ошибка:\n>>> ${command.name}`, ephemeral: true });
        }
    }
};