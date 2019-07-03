"use strict";

module.exports = function(sequelize, DataTypes) {
  var Puerta = sequelize.define("Puerta", {
    id_puerta: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_terminal:{
        type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'puerta'});
  return Puerta;
};
