const Endereco = require('../models/Endereco');
const Pessoa = require('../models/Pessoa');

module.exports = {

  //Metodo que lista endereco
  async index(req, res) {

    const { idpessoa } = req.params;
    const pessoa = await Pessoa.findByPk(idpessoa, {
      include: { association: 'enderecos' }
    });

    return res.json(pessoa);
  },

  //Metodo que cria endereço
  async store(req, res) {

    const { idpessoa } = req.params;
    const { estado, cidade, rua, bairro, numero, cep, ref } = req.body;

    const pessoa = await Pessoa.findByPk(idpessoa);
    
    if (!pessoa) {
      return res.status(400).json({ error: 'Usuario não encontrado' });
    }

    const endereco = await Endereco.create({
      estado,
      cidade,
      rua,
      bairro,
      numero,
      cep,
      ref,
      idpessoa,
    });

    return res.json(endereco);
  }
};