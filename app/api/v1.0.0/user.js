const bcrypt = require('bcryptjs')
const { RegisterValidator } = require('../../validators/validator')
const { success } = require('../../lib/helper')
const User = require('../../models/user.js')
const Router = require('koa-router')
const router = new Router({
  prefix: '/v1.0.0/user'
})

// 注册 新增数据 put get delete
router.post('/register', async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  // const salt = bcrypt.genSaltSync(10)
  // const psw = bcrypt.hashSync(v.get('body.password2'), salt)
  const user = {
    email: v.parsed.body.email,
    password: v.get('body.password2'),
    nickname: v.get('body.nickname')
  }
  await User.create(user)
  success()
  // throw new global.errs.Success()
})

module.exports = router
