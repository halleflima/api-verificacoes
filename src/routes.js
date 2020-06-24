const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');


const routes = express.Router();


routes.post('/pessoa', PessoaController.store); //Rota criar pessoas
routes.get('/pessoa', PessoaController.index); //Rota para listar


routes.get('/pessoa/:idpessoa/endereco', EnderecoController.index); //Rota para listar
routes.post('/pessoa/:idpessoa/endereco', EnderecoController.store); //Rota para criar



module.exports = routes;    
