module.exports = {
    parseMassage: function(message, prefix) {
        var parts = message.trim().split(' ');
        var command = (parts[0][0] === prefix) ? parts[0].slice(1) : 'wrong_command';
        var args = parts.slice(1);

        return [command, args];
    },

    userEqual: function(user_one, user_two) {
        return user_one.username == user_two.username
            && user_one.discriminator == user_two.discriminator;
    },

    isAvailableCommandInAction: function(command, actionType) {
        var allowedCommands = {
            101: ['fight'],
            102: ['fight']
        };

        return true;
        //allowedCommands[actionType].includes(command);
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
    },

    getRandomFloat: function(max) {
        return Math.random() * max;
    },

    getPercentChance: function(percent) {
        return this.getRandomFloat(100) < percent;
    },
};