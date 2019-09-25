"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vuelo = sequelize.define("vuelo", {
    id_vuelo: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_origen:{
        type : DataTypes.STRING
    },
    id_destino:{
        type : DataTypes.STRING
    },
    id_aerolinea:{
        type : DataTypes.STRING
    },
    id_avion:{
        type : DataTypes.STRING
    },
    id_terminal:{
        type : DataTypes.STRING
    },
    id_puerta:{
        type : DataTypes.STRING
    },
    id_estado:{
        type : DataTypes.STRING
    },
    id_ubicacion_avion:{
        type : DataTypes.STRING
    },
    duracion:{
        type : DataTypes.STRING
    },
    fecha:{
        type : DataTypes.STRING
    },
    hora_salida:{
        type : DataTypes.STRING
    },
    hora_llegada:{
        type : DataTypes.STRING
    },
    clima:{
        type : DataTypes.STRING
    },
    codigo_vuelo:{
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
  tableName: 'vuelo'});
  return Vuelo;
};
