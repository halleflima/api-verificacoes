'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ordem', {
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
      idendereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model:'endereco', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ordem');
  }
};
