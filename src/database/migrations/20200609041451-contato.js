'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contato', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idpessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'pessoa', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      telefone: {
        type: Sequelize.STRING, 
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contato');
  }
};
