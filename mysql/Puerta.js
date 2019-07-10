"use strict";

module.exports = function(sequelize, DataTypes) {
  var Puerta = sequelize.define("puerta", {
    id_puerta: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_terminal:{
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
  tableName: 'puerta'});
  return Puerta;
};
