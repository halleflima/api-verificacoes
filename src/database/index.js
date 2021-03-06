const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Endereco = require('../models/Endereco');
const Contato = require('../models/Contato');
const Ordem = require('../models/Ordem');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Endereco.init(connection);
Contato.init(connection);
Ordem.init(connection);

Pessoa.associate(connection.models);
Endereco.associate(connection.models);
Contato.associate(connection.models);
Ordem.associate(connection.models);


module.exports = connection;