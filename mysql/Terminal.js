"use strict";

module.exports = function(sequelize, DataTypes) {
  var Terminal = sequelize.define("Terminal", {
    id_terminal: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    direccion:{
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
  tableName: 'terminal'});
  return Terminal;
};
