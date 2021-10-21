module.exports = {
    getInfoText: async function(character) {
        return `**Здоровье**: ${character.c_health} \n**Деньги**: ${character.c_money}`;
    },
    getInfoButtons: async function() {
        return [
            {
                id: 'info.inventory',
                label: 'Инвентарь',
                style: 'PRIMARY',
            },
            {
                id: 'info.quest',
                label: 'Квесты',
                style: 'PRIMARY',
            }
        ];
    },
    getInventoryText: async function(inventory) {
        let item_list = `Список предметов в инвентаре:\n`;

        let i = 1;
        for (const cell of inventory) {
            let item = await cell.getId_item_t_item();
            item_list += `${i++}) ${item.c_name} **Количество**: ${cell.c_count}\n**Описание**: ${item.c_description}\n\n`;
        }

        return item_list;
    },
    getInventoryButtons: async function() {
        return [
            {
                id: 'info.character',
                label: 'Персонаж',
                style: 'PRIMARY',
             },
             {
                 id: 'info.quest',
                 label: 'Квесты',
                 style: 'PRIMARY',
             }
        ];
    },
    getQuestText: async function(quests) {
        let quest_list = `Список квестов (в разработке):\n`;

        let i = 1;
        for (const quest of quests) {
            quest_list += `${i++}) **Название**: ${quest.c_name}\n**Описание**: ${quest.c_description}\n\n`;
        }

        return quest_list;
    },
    getQuestButtons: async function() {
        return [
            {
                id: 'info.inventory',
                label: 'Инвентарь',
                style: 'PRIMARY',
            },
            {
                id: 'info.character',
                label: 'Персонаж',
                style: 'PRIMARY',
            }
        ];
    }
};
