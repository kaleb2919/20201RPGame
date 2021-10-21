const characterHandler = require.main.require('./gameplay/characterHandler.js');

module.exports = {
    name: 'gps',
    description: 'Получить информацию о местоположении персонажа',
    async execute(interaction, params) {
        var map = await params.character.getId_map_t_map();

        return {
            message: `**Локация**: ${map.c_name}\n`
                + `**Описание**: ${map.c_description}\n`,
            image:  `https://2021rpgame.ru/image/map?size=${map.c_size}&cursor_h=${params.character.c_lat}&cursor_w=${String.fromCharCode(parseInt(params.character.c_lon) + 65)}&map=${map.c_image}`,
        };
    },
};