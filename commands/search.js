const locale = require.main.require('./locale.js');
const searchHandler = require.main.require('./gameplay/searchHandler.js');

module.exports = {
    name: 'search',
    description: 'Исследовать текущую клетку',
    async execute(interaction, params) {
        var character = params.character;

        var map = await interaction.client.connection.models
            .t_map.findOne({
                where: {
                    id: character.id_map,
                }
            });

        var searchResult = await searchHandler.gerResult(interaction.client.connection.models, character, map);

        let action = {};

        if (searchResult) {
            action = await interaction.client.connection.models
                .t_action.create({
                    id_character: character.id,
                    id_type: searchResult.type,
                    c_category: searchResult.category,
                    c_duration: searchResult.duration,
                    c_params: JSON.stringify(searchResult.params),
                });
        }

        return { message: locale.searchResultMessage[action?.id_type ?? 0], buttons: searchResult.buttons, ephemeral: true };
    },
};