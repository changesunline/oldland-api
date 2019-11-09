class HttpException extends Error {
  constructor(msg='服务器异常',errorCode=10000, status=400) {
    super()
    this.errorCode = errorCode
    this.status = status
    this.msg = msg
  }
}
class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.status = 400
    this.errorCode = errorCode || 10000
    this.msg = msg || '服务器异常'
  }
}
module.exports = {HttpException, ParameterException}