const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_event', {
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
    c_drop_item: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_money: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_event',
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
    ]
  });
};
