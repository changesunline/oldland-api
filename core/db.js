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
    timestamps: false
  }
})
sequelize.sync()

module.exports = {
  db: sequelize
}