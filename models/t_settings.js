const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_money: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_location',
        key: 'id'
      }
    },
    id_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_group',
        key: 'id'
      }
    },
    id_loot_set: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_loot_set',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 't_settings',
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
        name: "t_settings_FK_loot_set",
        using: "BTREE",
        fields: [
          { name: "id_loot_set" },
        ]
      },
      {
        name: "t_settings_FK_t_group",
        using: "BTREE",
        fields: [
          { name: "id_group" },
        ]
      },
      {
        name: "t_settings_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_location" },
        ]
      },
    ]
  });
};
