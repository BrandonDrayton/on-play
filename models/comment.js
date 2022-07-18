'use strict'
const { INTEGER } = require('sequelize')
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User)
      Comment.belongsTo(models.Thread)
      Comment.belongsTo(models.Comment, { foreignKey: 'ParentId', as: 'Parent' })
      Comment.hasMany(models.Comment, { foreignKey: 'ParentId', as: 'Children' })
    }
  }
  Comment.init(
    {
      body: DataTypes.STRING,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Comment',
      paranoid: true,
    }
  )
  return Comment
}
