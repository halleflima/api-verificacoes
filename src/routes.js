const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const EnderecoController = require('./controllers/EnderecoController');
const ContatoController = require('./controllers/ContatoController');


const routes = express.Router();

//Rotas de Pessoa
routes.post('/pessoa', PessoaController.store); 
routes.get('/pessoa', PessoaController.index); 


//Rotas de Endereço
routes.get('/pessoa/:idpessoa/endereco', EnderecoController.index); 
routes.post('/pessoa/:idpessoa/endereco', EnderecoController.store); 
routes.post('/pessoa/:idpessoa/endereco/:idendereco', EnderecoController.update); 
routes.delete('/pessoa/:idpessoa/endereco/:idendereco', EnderecoController.delete); 


//Rotas de Contato
routes.get('/pessoa/:idpessoa/contato', ContatoController.index); 
routes.post('/pessoa/:idpessoa/contato', ContatoController.store); 
routes.post('/pessoa/:idpessoa/contato/:idcontato', ContatoController.update); 
routes.delete('/pessoa/:idpessoa/contato/:idcontato', ContatoController.delete); 

module.exports = routes;    
