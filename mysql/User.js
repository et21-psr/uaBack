"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
    },
    user:{
        type : DataTypes.STRING
    },
    password:{
        type : DataTypes.STRING
    },
    profile:{
       type : DataTypes.STRING
    },
    sede:{
        type : DataTypes.STRING
    }
  }, { freezeTableName: true,
  tableName: 'User'});



//Tarjeta.removeAttribute('id');
  return User;
};
