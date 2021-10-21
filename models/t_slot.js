const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_slot', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_character: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_character',
        key: 'id'
      },
      unique: "t_slot_FK_t_character"
    },
    c_head: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_body: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_weapon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_belt_1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_belt_2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_belt_3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 't_slot',
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
        name: "id_character",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_character" },
        ]
      },
      {
        name: "t_slot_FK_head",
        using: "BTREE",
        fields: [
          { name: "c_head" },
        ]
      },
      {
        name: "t_slot_FK_body",
        using: "BTREE",
        fields: [
          { name: "c_body" },
        ]
      },
      {
        name: "t_slot_FK_weapon",
        using: "BTREE",
        fields: [
          { name: "c_weapon" },
        ]
      },
      {
        name: "t_slot_FK_belt_1",
        using: "BTREE",
        fields: [
          { name: "c_belt_1" },
        ]
      },
      {
        name: "t_slot_FK_belt_2",
        using: "BTREE",
        fields: [
          { name: "c_belt_2" },
        ]
      },
      {
        name: "t_slot_FK_belt_3",
        using: "BTREE",
        fields: [
          { name: "c_belt_3" },
        ]
      },
    ]
  });
};
