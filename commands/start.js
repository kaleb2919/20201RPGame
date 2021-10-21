module.exports = {
    name: 'start',
    description: 'Создать персонажа',
    options: [
        {
            name: 'name',
            description: 'Имя персонажа',
            type: 'STRING',
            required: true
        },
        {
            name: 'group',
            type: 'INTEGER',
            description: 'Группировка персонажа',
            required: true,
            choices: [
                {
                    name: 'Вольные сталкеры',
                    value: 1
                },
                {
                    name: 'Долг',
                    value: 2
                },
                {
                    name: 'Свобода',
                    value: 3
                },
                {
                    name: 'Ученые',
                    value: 4
                },
                {
                    name: 'Бандиты',
                    value: 5
                },
                {
                    name: 'Военные',
                    value: 6
                }
            ]
        }
    ],
    async execute(interaction, params) {
        const name = interaction.options.getString('name');
        const group = interaction.options.getInteger('group');

        let settings = await interaction.client.connection.models
            .t_settings.findOne({
                where: {
                    id_group: group
                }
            });

        let character = await interaction.client.connection.models
            .t_character.create({
                id_discord_user: params.discord_user.id,
                c_money: settings.c_money,
                c_name: name,
                id_map : settings.id_location,
                id_group: group,
                c_health: settings.c_health,
                c_radiation_level: 0,
                c_level: 1,
                c_lat: 1,
                c_lon: 1
            });

        let text = `Персонаж успешно создан!`;

        return { message: text, ephemeral: true };
    },
};
