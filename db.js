const mysql = require("mysql2");
const { Sequelize } = require('sequelize');

module.exports = {
    init: function (config) {
        const sequelize = new Sequelize(`${config.type}://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`, {
            logging: false
        });

        try {
            sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        return sequelize;
    }
};