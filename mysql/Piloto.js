"use strict";

module.exports = function(sequelize, DataTypes) {
  var Piloto = sequelize.define("Piloto", {
    id_piloto: {
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
  tableName: 'piloto'});
  return Piloto;
};
