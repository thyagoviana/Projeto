'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DOUBLE
      },
      editora_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'editora', key: 'cnpj'}
      },
      autor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'autor', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  }
};