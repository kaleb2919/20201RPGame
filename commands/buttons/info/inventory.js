const characterHandler = require.main.require('./gameplay/characterHandler.js');

module.exports = {
    name: 'inventory',
    async execute(interaction, params) {
        inventory = await interaction.client.connection.models
            .t_inventory.findAll({
                where: {
                    id_character: params.character.id
                }
            });

        return {
            message: await characterHandler.getInventoryText(inventory),
            buttons: await characterHandler.getInventoryButtons(params.character),
            update: true
        };
    },
};