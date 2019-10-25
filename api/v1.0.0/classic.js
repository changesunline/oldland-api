const Router = require('koa-router')
const router = new Router()

router.get('/v1.0.0/classic/latest', (ctx, next) => {
  ctx.body = {key: 'classic'}
  next()
})

module.exports = router