'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Editora extends Model {
    static associate(models) {
      Editora.hasMany(models.Livro, {
        foreignKey: 'editora_id'
      });
    }
  }
  Editora.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Editora',
    tableName: 'editoras'
  });
  return Editora;
};