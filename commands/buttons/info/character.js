const characterHandler = require.main.require('./gameplay/characterHandler.js');

module.exports = {
    name: 'character',
    async execute(interaction, params) {
        return {
            message: await characterHandler.getInfoText(params.character),
            buttons: await characterHandler.getInfoButtons(params.character),
            update: true,
        };
    },
};