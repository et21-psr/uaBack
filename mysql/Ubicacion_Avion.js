"use strict";

module.exports = function(sequelize, DataTypes) {
  var Aerolinea = sequelize.define("Aerolinea", {
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
    }
  }, { freezeTableName: true,
  tableName: 'aerolinea'});
  return Aerolinea;
};
