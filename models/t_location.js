const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_location', {
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
    c_lat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_lon: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    c_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    c_anomaly_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    c_anomaly_level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_map: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 't_map',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 't_location',
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
        name: "t_location_FK",
        using: "BTREE",
        fields: [
          { name: "id_map" },
        ]
      },
    ]
  });
};
