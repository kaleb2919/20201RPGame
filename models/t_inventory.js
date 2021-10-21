const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_inventory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    id_character: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_character',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 't_inventory',
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
        name: "t_inventory_fk0",
        using: "BTREE",
        fields: [
          { name: "id_item" },
        ]
      },
      {
        name: "t_inventory_fk1",
        using: "BTREE",
        fields: [
          { name: "id_character" },
        ]
      },
    ]
  });
};
