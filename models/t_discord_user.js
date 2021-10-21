const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_discord_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_discord: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      unique: "t_discord_user_UN"
    },
    c_banned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    c_ban_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_discord_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "t_discord_user_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_discord" },
        ]
      },
    ]
  });
};
