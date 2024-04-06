'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
        Autor.hasMany(models.Livro, {
          foreignKey: 'autor_id'
        });
    }
  }
  Autor.init({
    nome: DataTypes.STRING,
    ano_nascimento: DataTypes.INTEGER,
    nacionalidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autores'
  });
  return Autor;
};