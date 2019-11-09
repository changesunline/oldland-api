const Router = require('koa-router')
const requireDirectory = require('require-directory')
// 初始化管理器
class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadHttpException()
    InitManager.loadConfig()
  }
  static loadConfig(path='') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global.config = config
  }
  // 初始化路由
  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api/v1.0.0`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModel
    })
    
    function whenLoadModel(obj) {
      if(obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }
  // 初始化异常对象
  static loadHttpException() {
    const errors = require('./http-exception')
    global.errs = errors
  }
}

module.exports = InitManager