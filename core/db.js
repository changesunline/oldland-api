const {
  dbName,
  host,
  port,
  user,
  password
} = require('../config/config').database
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbName, user, password, {
  host,
  dialect: 'mysql',
  port,
  logging: true,
  timezone: '+08:00',
  define: {
    timestamps: true,
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    underscored: true
  }
})
sequelize.sync({
  force: true
})

module.exports = {
  db: sequelize
}