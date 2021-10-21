const fightHandler = require.main.require('./gameplay/fightHandler.js');
const locale = require.main.require('./locale.js');
const utils = require.main.require('./utils.js');

module.exports = {
    name: 'defend',
    async execute(interaction, params) {
        if (!params.action) {
            return { message: locale.actionDenied, ephemeral: true };
        }

        actionParams = JSON.parse(params.action.c_params);
        mutant = actionParams.mutant;
        player = actionParams.player;

        var tmp_dodge = 75;

        var status = 0;
        var result = {
            in_damage: 0,
            out_damage: 0,
            player_dodged: false,
            mutant_dodged: false
        };

        // нас бьёт мутант, проверяем попал ли
        result.player_dodged = utils.getPercentChance(tmp_dodge);
        if (!result.player_dodged) {
            // дамажим если попал
            result.in_damage = mutant.attack;
            player.current_health = player.current_health - result.in_damage;
        }

        // если померли, закрываем событие
        if (player.current_health <= 0) {
            status = 1;
        }

        // обновим инфу о ходе
        actionParams.mutant = mutant;
        actionParams.player = player;

        // запишем инфу
        await interaction.client.connection.models
            .t_action.update({
                c_params: JSON.stringify(actionParams),
                c_status: status
            }, {
                where: {
                    id: params.action.id
                }
            });

        var result = fightHandler.DrawFightMessage(mutant, player, params, result);
        result.update = true;
        return result;
    },
};