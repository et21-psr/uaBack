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
    }
  }, { freezeTableName: true,
  tableName: 'pasajero'});
  return Pasajero;
};
