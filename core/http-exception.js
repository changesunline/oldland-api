class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, status = 400) {
    super()
    this.status = status
    this.msg = msg
    this.errorCode = errorCode
  }
}
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.status = 400
    this.msg = msg || '服务器异常'
    this.errorCode = errorCode || 10000
  }
}
class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.status = 201
    this.msg = msg || 'ok'
    this.errorCode = errorCode || 0
  }
}
module.exports = {
  HttpException,
  ParameterException,
  Success
}
