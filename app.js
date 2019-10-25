const Koa = require('koa')
const axios = require('axios')
const Router = require('koa-router')
// 应用程序对象
const app = new Koa()
const router = new Router()

router.get('/classic/latest', (ctx, next) => {
  ctx.body = {url: '/classic/latest'}
  next()
})

app
  .use(router.routes())
  .use(async (ctx, next) => {
  // await next()
  const url = ctx.path
  console.log(url)
  // if (ctx.path === '/classic/latest') {
    
  // }
})

app.listen(3000)