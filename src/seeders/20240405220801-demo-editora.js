'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('editoras',[
      {
        nome: 'Editora 34',
        cnpj: '32.081.580/0001-85',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Companhia das Letras',
        cnpj: '55.789.390/0001-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Autêntica Editora',
        cnpj: '07.593.572/0001-70',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Editora Record',
        cnpj: '07.115.047/0001-40',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Editora Todavia',
        cnpj: '27.137.961/0001-07',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('editoras', null, {});
  }
};
