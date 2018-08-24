'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<h2>Hello world<h2/>'
  }
}

module.exports = HomeController
