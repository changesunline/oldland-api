const { Sequelize, Model } = require('sequelize')
const { db } = require('../../core/db')
const bcrypt = require('bcryptjs')

class User extends Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        const salt = bcrypt.genSaltSync(10)
        const psw = bcrypt.hashSync(val, salt)
        this.setDataValue('password', psw)
      }
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true
    }
  },
  {
    sequelize: db,
    tableName: 'user'
  }
)

module.exports = User
