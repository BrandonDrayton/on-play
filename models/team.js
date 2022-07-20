'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Team.hasMany(models.User, { foreignKey: 'FavoriteTeamId' })
      Team.hasMany(models.Thread)
    }
  }
  Team.init(
    {
      sport: DataTypes.STRING,
      league: DataTypes.STRING,
      name: DataTypes.STRING,
      espnTeamId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Team',
    }
  )
  return Team
}
