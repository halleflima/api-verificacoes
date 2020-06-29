const { Model, DataTypes } = require('sequelize');

class Contato extends Model {
  static init(connection){
    super.init({
      telefone: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      timestamps: false,
    })
  }

  static associate(models) {
    this.belongsTo(models.Pessoa,  {foreignKey:'idpessoa', as:'contato' });
  }
}

module.exports = Contato;

