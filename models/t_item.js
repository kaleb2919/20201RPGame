const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_item', {
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
    c_type_use: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    c_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    'с_weight': {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    c_strength: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_agility: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_charisma: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_intelligence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_luck: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_damage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_mult_crit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_ammo_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_chance_crit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_health: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_radiation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_fire: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_electro: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_psy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_weight_limit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_chemic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    c_accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 't_item',
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
