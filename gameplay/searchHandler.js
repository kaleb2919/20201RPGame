const mutantHandler = require('./mutantHandler.js');
const utils = require.main.require('./utils.js');

module.exports = {
    gerResult: async function(models, character, map) {
        var resultSearch = false;

        // switch (utils.getRandomInt(3)) {
        switch (0) {
            case 0:
                if (utils.getPercentChance(map.c_mutant_chance)) {
                    var mutant_list = await models
                        .t_mutant_list.findAll({
                            where: {
                                id_map: map.id
                            }
                        });

                    var mutant_chance_list = [];
                    for(var i = 0; i < mutant_list.length; i++) {
                        mutant_chance_list = mutant_chance_list.concat(Array(mutant_list[i].c_chance).fill(mutant_list[i].id_mutant));
                    }

                    var mutantInstance = await mutantHandler.getMutantInstance(models, mutant_chance_list[utils.getRandomInt(mutant_chance_list.length)]);

                    resultSearch = {
                        category: 'fight',
                        type: (utils.getPercentChance(mutantInstance.c_aggression_chance)) ? 101 : 102,
                        duration: 60 * 60,
                        params: {
                            mutant: mutantInstance,
                            player: {
                                health: character.c_health,
                                current_health: character.c_health,
                                confused: 0,
                                icon: character.c_icon
                            }
                        },
                        buttons: [
                            {
                               id: 'fight.start',
                               label: 'Бой',
                               style: 'DANGER',
                            },
                            {
                                id: 'fight.escape',
                                label: 'Побег',
                                style: 'PRIMARY',
                            }
                        ]
                    }
                }
                break;
            case 1:
                if (utils.getPercentChance(map.c_stash_chance)) {
                    resultSearch = {
                        category: 'stash',
                        type: 201,
                        duration: 60 * 15,
                        params: {
                            id_player: 0, // 0 - неизвестный сталкер
                            id_loot_set: 1
                        }
                    }
                }
                break;
            case 2:
                if (utils.getPercentChance(map.c_corpse_chance)) {
                    resultSearch = {
                        category: 'corpse',
                        type: 301,
                        duration: 60 * 15,
                        params: {
                            id_player: 0, // 0 - неизвестный сталкер
                            id_loot_set: 1,
                        }
                    }
                }
                break;
        }

        return resultSearch;
    }
};