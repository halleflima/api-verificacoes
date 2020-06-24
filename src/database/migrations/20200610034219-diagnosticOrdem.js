'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('diagnosticOrdem', {
      id: {
        type: Sequelize.INTEGER, //ID local
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idpessoa: {
        type: Sequelize.INTEGER,  //Chave DIAGNOSTICO ~ PESSOA
        allowNull: false,
        references: { model:'pessoa', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idordem: {
        type: Sequelize.INTEGER,  //Chave DIAGNOSTICO ~ ORDEM
        allowNull: false,
        references: { model:'ordem', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idatendente: {
        type: Sequelize.INTEGER,  //Chave DIAGNOSTICO ~ ATENDENTE
        allowNull: false,
        references: { model:'atendente', key:'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      fibraPossibilidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      metragemCabos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kitCliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dificuldade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      poste: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      esticador: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arvore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kitCompativel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      provNome: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('diagnosticOrdem');
  }
};
