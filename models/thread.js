'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Thread.belongsTo(models.User)
      Thread.belongsTo(models.Team)
      Thread.hasMany(models.Comment)
    }
  }
  Thread.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Thread',
    }
  )
  return Thread
}
