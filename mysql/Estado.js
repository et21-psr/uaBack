"use strict";

module.exports = function(sequelize, DataTypes) {
  var Estado = sequelize.define("estado", {
    id_estado: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    tipo:{
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
  tableName: 'estado'});
  return Estado;
};
