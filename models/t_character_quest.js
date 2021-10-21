const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_character_quest', {
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
      }
    },
    id_quest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_quest',
        key: 'id'
      }
    },
    c_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 't_character_quest',
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
        name: "t_character_quest_fk0",
        using: "BTREE",
        fields: [
          { name: "id_character" },
        ]
      },
      {
        name: "t_character_quest_fk1",
        using: "BTREE",
        fields: [
          { name: "id_quest" },
        ]
      },
    ]
  });
};
