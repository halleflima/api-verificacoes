const Contato = require('../models/Contato');
const Pessoa = require('../models/Pessoa');

module.exports = {

  async index(req, res) {

    const { idpessoa } = req.params;
    const pessoa = await Pessoa.findByPk(idpessoa, {
      include: { association: 'contatos' }
    });

    return res.json(pessoa);
  },

}