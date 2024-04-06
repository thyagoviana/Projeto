'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livro extends Model {
    static associate(models) {
      Livro.belongsTo(models.Editora, {
        foreignKey: 'editora_id'
      });
      Livro.belongsTo(models.Autor, {
        foreignKey: 'autor_id'
      });
    }
  }
  Livro.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,
    editora_id: DataTypes.INTEGER,
    autor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Livro',
    tableName: 'livros'
  });
  return Livro;
};