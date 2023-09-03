'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    static associate(models) {
      Todos.belongsTo(models.User, { foreignKey: 'user_id' }); // Menghubungkan Todos ke User dengan foreign key 'user_id'
    }
  }
  Todos.init({
    title: DataTypes.STRING,
    completed: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Todos',
  });
  return Todos;
};