const Koa = require('koa')
const axios = require('axios')
const Router = require('koa-router')
const requireDirectory = require('require-directory')
requireDirectory(module)
const routers = require('./api/v1.0.0') 

// 应用程序对象
const app = new Koa()

for (const obj in routers) {
  if (obj instanceof Router) {
    app.use(obj.routes())
  }
}

app.listen(3000)