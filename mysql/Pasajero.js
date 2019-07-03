"use strict";

module.exports = function(sequelize, DataTypes) {
  var Pasajero = sequelize.define("Pasajero", {
    id_pasajero: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_avion:{
        type : DataTypes.STRING
    },
    nombre:{
        type : DataTypes.STRING
    },
    apellido:{
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
  tableName: 'pasajero'});
  return Pasajero;
};
