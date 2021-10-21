const characterHandler = require.main.require('./gameplay/characterHandler.js');

module.exports = {
    name: 'quest',
    async execute(interaction) {
        var quests = [
            {
                c_name: "Убить Стрелка",
                c_description: "Хрен его знает, на кой ляд тебе этот Стрелок сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что..."
            },
            {
                c_name: "Найти посевы",
                c_description: "Занимался сбором посевов по RV чуть южнее озера Янтарь, под склоном холма, когда вдруг подвергся обстрелу. Стрелявших не опознал. Ранен в ногу, но скрылся от них в бункере учёных. На вопросы последних о том, чем я тут занимался, ссылаюсь на замеры аномальной активности. Найди ещё 5 посевов, только нужно подождать"
            },
            {
                c_name: "Убить Сидора",
                c_description: "Хрен его знает, на кой ляд тебе этот Сидор сдался, но я в чужие дела не лезу, хочешь убить, значит есть за что..."
            }
        ];

        return {
            message: await characterHandler.getQuestText(quests),
            buttons: await characterHandler.getQuestButtons(),
            update: true,
        };
    },
};