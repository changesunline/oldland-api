const Koa = require('koa')
const axios = require('axios')
const parser = require('koa-bodyparser')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

require('./app/models/user')

// 应用程序对象
const app = new Koa()
app.use(catchError)
app.use(parser())

InitManager.initCore(app)

app.listen(3000)