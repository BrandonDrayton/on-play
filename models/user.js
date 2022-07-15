'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment)
      User.hasMany(models.Thread)
      User.belongsTo(models.Team)
      User.belongsToMany(models.Like, { through: models.Like })
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.STRING,
      phone: DataTypes.TEXT,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      favoriteTeam: DataTypes.TEXT,
      iconText: DataTypes.TEXT,
      iconColor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  )
  return User
}
