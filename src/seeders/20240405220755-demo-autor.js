'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autores',[
      {
        nome: 'Graciliano Ramos',
        nascimento: 1892,
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Dante Alighieri',
        nascimento: 1265,
        nacionalidade: 'Italia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Anton Tchekhov',
        nascimento: 1860,
        nacionalidade: 'Russia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Hilda Hilst',
        nascimento: 1930,
        nacionalidade: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Virginia Woolf',
        nascimento: 1882,
        nacionalidade: 'Reino Unido',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('autores', null, {});
  }
};
