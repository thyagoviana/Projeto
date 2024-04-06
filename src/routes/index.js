const express = require('express');
const autores = require('./AutorRoute.js');
const livros = require('./LivroRoute.js');
const editoras = require('./EditoraRoute.js');

module.exports = app => {
  app.use(
    express.json(),
    autores,
    livros,
    editoras
  );
};