const fightHandler = require.main.require('./gameplay/fightHandler.js');
const locale = require.main.require('./locale.js');

module.exports = {
    name: 'start',
    async execute(interaction, params) {
        if (!params.action) {
            return { message: locale.actionDenied, ephemeral: true };
        }

        actionParams = JSON.parse(params.action.c_params);
        var mutant = actionParams.mutant;
        var player = actionParams.player;

        return fightHandler.DrawFightMessage(mutant, player, params);
    },
};