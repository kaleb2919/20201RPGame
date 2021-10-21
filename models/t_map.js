const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_map', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    c_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    c_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_corpse_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_stash_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_mutant_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_image: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_size: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_map',
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
