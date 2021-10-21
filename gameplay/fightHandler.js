const locale = require.main.require('./locale.js');

module.exports = {
    /**
     * Mutant struct:
     * {
            name
            description
            health
            current_health
            attack
            dodge_chance
            attack_dispersion
            psi_attack
        }
     */
    DrawFightMessage: function(mutant, player, params, result) {
        var last_action = ``;
        if (result) {
            last_action = `\`\`\`\n`;
            if (result.mutant_dodged) {
                last_action += `> ` + locale.replace(locale.fight_log_dodge, mutant.name) + `\n`;
            } else if (result.in_damage > 0) {
                last_action += `> ` + locale.replace(locale.fight_log_attack, mutant.name, result.in_damage) + `\n`;
            } else {
                last_action += `> \n`;
            }

            if (result.player_dodged) {
                last_action += `> ` + locale.replace(locale.fight_log_dodge, params.character.c_name) + `\n`;
            } else if (result.out_damage > 0) {
                last_action += `> ` + locale.replace(locale.fight_log_attack, params.character.c_name, result.out_damage) + `\n`;
            } else {
                last_action += `> \n`;
            }
            last_action += `\`\`\``;
        }
        return {
            message:
                `${params.character.c_name}: \`${player.current_health}/${player.health}\`\n` +
                `${mutant.name}: \`${mutant.current_health}/${mutant.health}\`\n` +
                last_action,
            image: 'https://2021rpgame.ru/image/fight?id=' + params.action.id,
            buttons: [
                {
                    id: 'fight.attack',
                    label: 'Атака',
                    style: 'DANGER',
                },
                {
                    id: 'fight.defend',
                    label: 'Защита',
                    style: 'SUCCESS',
                },
                {
                    id: 'fight.use',
                    label: 'Инвентарь',
                    style: 'PRIMARY',
                }
            ]
        };
    }
};