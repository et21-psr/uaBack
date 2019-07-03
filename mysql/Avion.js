"use strict";

module.exports = function(sequelize, DataTypes) {
  var Avion = sequelize.define("Avion", {
    id_avion: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_aerolinea:{
        type : DataTypes.STRING
    },
    modelo:{
        type : DataTypes.STRING
    },
    matricula:{
        type : DataTypes.STRING
    },
    capacidad:{
        type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'avion'});
  return Avion;
};
