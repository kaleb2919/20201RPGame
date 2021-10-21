const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_mutant_list', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_map',
        key: 'id'
      }
    },
    id_mutant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_mutant',
        key: 'id'
      }
    },
    c_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_quest: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 't_quest',
        key: 'id'
      }
    },
    c_lat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_lon: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_mutant_list',
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
        name: "t_mutant_list_FK",
        using: "BTREE",
        fields: [
          { name: "id_map" },
        ]
      },
      {
        name: "t_mutant_list_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_mutant" },
        ]
      },
      {
        name: "t_mutant_list_FK_2",
        using: "BTREE",
        fields: [
          { name: "id_quest" },
        ]
      },
    ]
  });
};
