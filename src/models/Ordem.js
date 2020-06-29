const { Model, DataTypes } = require('sequelize');


class Ordem extends Model {
  static init(connection){
    super.init({
      status: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      timestamps: true,
    })
  }
  
  static associate(models) {
    this.belongsTo(models.Pessoa,  {foreignKey:'idpessoa', as:'ordem' });
    this.belongsTo(models.Endereco,  {foreignKey:'idendereco', as:'ordemEndereco' });
  }
}

module.exports = Ordem;