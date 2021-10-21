const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_character', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_money: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_discord_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_discord_user',
        key: 'id'
      }
    },
    id_map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_map',
        key: 'id'
      }
    },
    c_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_radiation_level: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    c_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_group',
        key: 'id'
      }
    },
    c_alive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    c_lat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_lon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_icon: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_character',
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
        name: "t_character_FK_t_location",
        using: "BTREE",
        fields: [
          { name: "id_map" },
        ]
      },
      {
        name: "t_character_FK",
        using: "BTREE",
        fields: [
          { name: "id_group" },
        ]
      },
      {
        name: "t_character_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_discord_user" },
        ]
      },
    ]
  });
};
