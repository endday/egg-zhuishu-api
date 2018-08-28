'use strict'

const Controller = require('egg').Controller
const Api = require('../../api/index')

class Rank extends Controller {
  async list() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(Api.rank.list)
  }

  async detail() {
    const { ctx, service } = this
    ctx.body = await service.api.forward(`${Api.rank.detail}${ctx.params.rankId}`)
  }
}

module.exports = Rank
