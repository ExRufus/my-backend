'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Todos, { foreignKey: 'user_id' });
    }
  }

  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};