'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editora_id',
        as: 'editoras'
      });
      Livro.belongsTo(models.Autor,{
        foreignKey: 'autor_id',
        as: 'autores'
      });
      }
    }
  Livro.init({
    titulo: DataTypes.STRING,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros'
  });
  return Livro;
}