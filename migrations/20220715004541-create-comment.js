'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      ThreadId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Threads',
          key: 'id',
        },
      },
      ParentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comments',
          key: 'id',
        },
      },
      body: {
        type: Sequelize.STRING,
      },
      likes: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments')
  },
}
