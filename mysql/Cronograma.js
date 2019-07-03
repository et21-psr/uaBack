"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cronograma = sequelize.define("Cronograma", {
    id_cronograma: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_vuelo:{
        type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'cronograma'});
  return Cronograma;
};
