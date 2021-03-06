"use strict";

module.exports = function(sequelize, DataTypes) {
  var Aerolinea = sequelize.define("aerolinea", {
    id_aerolinea: {
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
  tableName: 'aerolinea'});
  return Aerolinea;
};
