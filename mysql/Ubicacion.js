"use strict";

module.exports = function(sequelize, DataTypes) {
  var Ubicacion = sequelize.define("Ubicacion", {
    id_ubicacion: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    nombre:{
        type : DataTypes.STRING
    },
    codigo:{
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
  tableName: 'ubicacion'});
  return Ubicacion;
};
