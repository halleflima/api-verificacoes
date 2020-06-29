const { Model, DataTypes } = require('sequelize');


class Pessoa extends Model {
  static init(connection){
    super.init({
      nome: DataTypes.STRING,
      tipo: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      timestamps: false,
    })
  }
  
  static associate(models) {
    this.hasMany(models.Endereco,  {foreignKey:'idpessoa', as:'enderecos' });
    this.hasMany(models.Contato,  {foreignKey:'idpessoa', as:'contatos' });
  }
}

module.exports = Pessoa;