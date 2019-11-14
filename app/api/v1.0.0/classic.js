const Router = require('koa-router')
const router = new Router()
const {HttpException, ParameterException} = require('../../../core/http-exception')
const {PositiveIntegerValidator} = require('../../validators/validator')


router.post('/v1.0.0/:id/classic/latest', async (ctx, next) => {
  const path = ctx.params
  const query = ctx.request.query
  const headers = ctx.request.header
  const body = ctx.request.body
  
  // if (path.id > 0) {

  // }

  const v = await new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id', parsed=false)
  ctx.body = {key: 'classic'}
  
})

module.exports = router