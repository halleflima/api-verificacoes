const Ordem = require('../models/Ordem');

module.exports = {

  //Metodo que lista pessoas
  async index(req, res){
    const ordem = await Ordem.findAll();
    
    return res.json(ordem);
  },

  //Metodo que cria uma pessoa
  async store(req, res) {
    const { nome, tipo } = req.body;

    const pessoa = await Pessoa.create({  nome, tipo  });

    return res.json(pessoa);
  }
};