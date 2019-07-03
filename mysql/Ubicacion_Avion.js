"use strict";

module.exports = function(sequelize, DataTypes) {
  var UbicacionAvion = sequelize.define("UbicacionAvion", {
    id_ubicacion_avion: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre:{
        type : DataTypes.STRING
    },
    cordenada:{
        type : DataTypes.STRING
    },
    createdAt:{
      type : DataTypes.DATE,
      field : "created_at"
    },
    updatedAt:{
      type : DataTypes.DATE,
      field : "updated_at"
    }

  }, { freezeTableName: true,
  tableName: 'ubicacion_avion'});
  return UbicacionAvion;
};
