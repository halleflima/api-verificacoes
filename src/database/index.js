const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Endereco = require('../models/Endereco');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Endereco.init(connection);

Pessoa.associate(connection.models);
Endereco.associate(connection.models);


module.exports = connection;