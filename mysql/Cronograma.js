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
  tableName: 'cronograma'});
  return Cronograma;
};
