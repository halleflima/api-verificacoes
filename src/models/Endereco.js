const { Model, DataTypes } = require('sequelize');


class Endereco extends Model {
  static init(connection){
    super.init({
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
      rua: DataTypes.STRING,
      bairro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      cep: DataTypes.STRING,
      ref: DataTypes.STRING,
    }, {
      sequelize: connection,
      freezeTableName: true,
      timestamps: false,
    })
  }

  static associate(models) {
    this.belongsTo(models.Pessoa,  {foreignKey:'idpessoa', as:'endereco' });
  }
}

module.exports = Endereco;