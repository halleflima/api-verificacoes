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

  async store(req, res) {
    const { idpessoa } = req.params;
    const { telefone } = req.body;

    const pessoa = await Pessoa.findByPk(idpessoa);
    
    if (!pessoa) {
      return res.status(400).json({ error: 'Usuario não encontrado' });
    }

    const contato = await Contato.create({ 
      telefone,
      idpessoa,
    });

    return res.json(contato);
  },


  async update(req, res) {

    const { idpessoa } = req.params;
    const { idcontato } = req.params;
    
    const pessoa = await Pessoa.findByPk(idpessoa, {
      include: { association: 'contatos' }
    });

    if (!pessoa) {
      return res.status(400).json({ error: 'Pessoa não encontrada' });
    }
    
    const contato = await Contato.findOne( {where: {id: idcontato } });
 
    if (!!contato) {
      const updateContato = await contato.update(req.body);
      return res.status(200).json({ post: updateContato });
    }

  },

  async delete(req, res) {
    const { idpessoa } = req.params;
    const { idcontato } = req.params;
    
    const pessoa = await Pessoa.findByPk(idpessoa, {
      include: { association: 'contatos' }
    });

    if (!pessoa) {
      return res.status(400).json({ error: 'Pessoa não encontrada' });
    }
    
    const contato = await Contato.findOne( {where: {id: idcontato } });
 
    if (!!contato) {
      const deleteContato = await contato.destroy();
      return res.status(200).json({ post: deleteContato });
    }
  }

}