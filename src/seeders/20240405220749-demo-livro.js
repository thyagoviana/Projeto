'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros',
    [
      {
        titulo: 'A Divina Comedia',
        preco: 100,
        editora_id: 1,
        autor_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'A Ilha de Sacalina',
        preco: 70,
        editora_id: 5,
        autor_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Da Poesia',
        preco: 63,
        editora_id: 2,
        autor_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Vidas Secas',
        preco: 42,
        editora_id: 4,
        autor_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Um Teto Todo Seu',
        preco: 40,
        editora_id: 3,
        autor_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
