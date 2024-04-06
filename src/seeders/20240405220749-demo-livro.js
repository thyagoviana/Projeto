'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros',
    [
      {
        titulo: 'A Divina Comedia',
        preco: 100,
        editora: 1,
        autor: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'A Ilha de Sacalina',
        preco: 70,
        editora: 5,
        autor: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Da Poesia',
        preco: 63,
        editora: 2,
        autor: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Vidas Secas',
        preco: 42,
        editora: 4,
        autor: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Um Teto Todo Seu',
        preco: 40,
        editora: 3,
        autor: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
