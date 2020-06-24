'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('atendente', {
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
      user: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('atendente');
  }
};
