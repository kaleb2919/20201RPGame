const characterHandler = require.main.require('./gameplay/characterHandler.js');

module.exports = {
    name: 'info',
    description: 'Получить информацию о персонаже',
    async execute(interaction, params) {
        return {
            message: await characterHandler.getInfoText(params.character),
            buttons: await characterHandler.getInfoButtons(params.character)
        };
    },
};