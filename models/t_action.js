const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_action', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_date_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    c_duration: {
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
    },
    c_params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    c_category: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_action',
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
        name: "t_action_fk0",
        using: "BTREE",
        fields: [
          { name: "id_character" },
        ]
      },
    ]
  });
};
