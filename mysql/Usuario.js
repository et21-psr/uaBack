"use strict";

module.exports = function(sequelize, DataTypes) {
  var Usuario = sequelize.define("Usuario", {
    id_usuario: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    id_aerolinea:{
        type : DataTypes.STRING
    },
    nombre:{
        type : DataTypes.STRING
    },
    apellido:{
        type : DataTypes.STRING
    },
    permisos:{
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
  tableName: 'usuario'});
  return Usuario;
};
