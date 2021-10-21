const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_item_set', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_loot_set: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_loot_set',
        key: 'id'
      }
    },
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_item_set',
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
        name: "t_item_set_FK_loot_set",
        using: "BTREE",
        fields: [
          { name: "id_loot_set" },
        ]
      },
      {
        name: "t_item_set_FK_item",
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
    ]
  });
};
