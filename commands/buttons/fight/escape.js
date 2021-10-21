const fightHandler = require.main.require('./gameplay/fightHandler.js');
const locale = require.main.require('./locale.js');

module.exports = {
    name: 'escape',
    async execute(interaction, params) {
        if (!params.action) {
            return { message: locale.actionDenied, ephemeral: true };
        }

        await interaction.client.connection.models
            .t_action.update({ c_status: 1 }, {
                where: {
                    id: params.action.id
                }
            });

        return { message: locale.successEscape };
    },
};