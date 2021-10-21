const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_mutant', {
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
    c_health: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_dodge_chance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    'с_attack_dispersion': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 4
    },
    c_psi_attack: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_aggression_chance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_icon: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_mutant',
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
