const Router = require('koa-router')
const router = new Router()

router.get('/v1.0.0/book/latest', (ctx, next) => {
  ctx.body = {key: 'book'}
  next()
})

module.exports = router