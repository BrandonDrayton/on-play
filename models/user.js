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
      User.belongsTo(models.Team, { foreignKey: 'FavoriteTeamId' })
      User.belongsToMany(models.Thread, { through: models.Like, as: 'Likes' })
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
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
