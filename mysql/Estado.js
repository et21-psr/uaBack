"use strict";

module.exports = function(sequelize, DataTypes) {
  var Estado = sequelize.define("Estado", {
    id_estado: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    tipo:{
        type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'estado'});
  return Estado;
};
