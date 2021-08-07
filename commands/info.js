module.exports = {
	name: 'info',
	description: 'Получить информацию о персонаже',
	async execute(interaction) {
		return interaction.reply(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};