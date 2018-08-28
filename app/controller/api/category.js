'use strict'

const Controller = require('egg').Controller
const Api = require('../../api/index')

class Category extends Controller {
  async statistics() {
    this.ctx.body = await this.ctx.service.api.forward(Api.categories.statistics)
  }

  async sub() {
    this.ctx.body = await this.ctx.service.api.forward(Api.categories.sub)
  }
}

module.exports = Category
