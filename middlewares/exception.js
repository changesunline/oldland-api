const {HttpException} = require('../core/http-exception')
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    // 开发环境
    // 生产环境
    if (global.config.environment === 'dev') {
      throw error
    }
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.message,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.status
    } else {
      ctx.body = {
        msg: '服务器繁忙，请稍后再试',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError