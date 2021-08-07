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
    }
};