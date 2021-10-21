const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_quest', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_item_reward: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_count_reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_money_reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_item_target: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_item',
        key: 'id'
      }
    },
    c_count_target: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_monster_target: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_mutant',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 't_quest',
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
        name: "t_quest_fk0",
        using: "BTREE",
        fields: [
          { name: "id_item_reward" },
        ]
      },
      {
        name: "t_quest_fk1",
        using: "BTREE",
        fields: [
          { name: "id_item_target" },
        ]
      },
      {
        name: "t_quest_fk2",
        using: "BTREE",
        fields: [
          { name: "id_monster_target" },
        ]
      },
    ]
  });
};
