const Pessoa = require('../models/Pessoa');

module.exports = {


  //Metodo que lista pessoas
  async index(req, res){
    const pessoa = await Pessoa.findAll();
    
    return res.json(pessoa);
  },

  //Metodo que cria uma pessoa
  async store(req, res) {
    const { nome, tipo } = req.body;

    const pessoa = await Pessoa.create({  nome, tipo  });

    return res.json(pessoa);
  }
};